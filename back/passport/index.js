const local = require('./local.js');
const { User } = require('../models/index.js');

module.exports = (passport) =>{
  passport.serializeUser( (user,done) => {
    done(null,user.id);
  })
  passport.deserializeUser( async(id,done) => {
    try{
    let result = await User.findOne({
      where: {id}
    })
    done(null,result)
  }catch(err){
    done(err);
  }})
  local(passport);
}