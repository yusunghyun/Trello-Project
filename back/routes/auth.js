const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");
const { alertLoc } = require("../modules/util.js");
const authService = require('../jwt/auth.js')

router.post("/join", async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let result = await User.findOne({ where: { email } }); //가입중 이미 있나 찾아보자!!
    if (result) {
      res.json({err:"이미 존재하는 이메일입니다"}); //플레시는 req에 묻어나온다 !
    } else {
      // let hash = await bcrypt.hash(password, 9);
      let resultUser = await User.create({
        email,
        password,
      });
      const accessToken = authService.signToken(resultUser.id)
      
  		res.json({ accessToken, resultUser })
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/login",async(req, res, next) => {
	const { email, password } = req.body

  const user = await User.findOne({
    where: { email, password }
  })

  if (!user) return res.status(401).json({ error: 'Login failure' })

  const accessToken = authService.signToken(user.id)
  
  res.json({ accessToken, user })
});

router.get('/logout',(req,res,next)=>{
	req.session.destroy();//혹시 세션남아있으면 지워줘
	res.end();//다시 원래 페이지로!
})

module.exports = router;
