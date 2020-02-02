const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");
const { alertLoc } = require("../modules/util.js");
const passport = require('passport');
const { isLogin, isLogout } = require('../passport/auth.js');
require('../passport/index')(passport);

router.post("/join", isLogout , async (req, res, next) => {
  let { email, userpw, username } = req.body;
  try {
    let result = await User.findOne({ where: { email } }); //가입중 이미 있나 찾아보자!!
    if (result) {
      res.json({err:"이미 존재하는 이메일입니다"}); //플레시는 req에 묻어나온다 !
    } else {
      let hash = await bcrypt.hash(userpw, 9);
      let resultUser = await User.create({
        email,
        userpw: hash,
        username
      });
      res.json({user:resultUser});
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/login", isLogout,(req, res, next) => {
	passport.authenticate('local', (error, user, info) => {
		console.log("passport");
		if(error) {
			console.error(error);
			next(error);
		}
		else if(!user) {
			res.json({err:'일치하는 회원이 없습니다.'});
		}
		else {
			req.login(user, (err) => {
				if(err) next(err);
				else {
					res.send(alertLoc("로그인 되었습니다.", "/"));
				}
			});
		}
	})(req, res, next)
});

router.get('/logout',isLogin,(req,res,next)=>{
	req.logout();//로그아웃해줘
	req.session.destroy();//혹시 세션남아있으면 지워줘
	res.redirect('/');//다시 원래 페이지로!
})

module.exports = router;
