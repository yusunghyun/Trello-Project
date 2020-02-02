const {alertLoc} = require('../modules/util')

const isLogin = (req,res,next) => {
  if (req.isAuthenticated()) next() //트루라면 계속 진행해~
  else res.json({ error: "정상적인 접근이 아닙니다." })
}

const isLogout = (req,res,next) => {
  if (!req.isAuthenticated()) next() //is머시기 저거는 로그인이 되어있으면 트루 아니면 폴스
  else res.json({ error: "로그인 된 상태에서는 사용할 수 없습니다." })
}

module.exports = {isLogin, isLogout}