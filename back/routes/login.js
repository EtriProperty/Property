//로그인 기능만(입력받은 비밀번호와 db의 비밀번호와 비교 후 넘겨줌)
var express = require("express");
var login = require("../models").userinfo;
//var crypto = require("crypto");

var router = express.Router();

/* GET login page. */
router.get("/", function(req, res) {
  res.render("signIn.html");
});

/* 테스트 안했음
router.post("/login_on", async function(req, res, next) {
  let body = req.body;
  let result = await login.findOne({
    where: {
      email: body.email
    }
  });
  let dbPassword = result.dataValues.password;
  let inputPassword = body.password;
  let salt = result.dataValues.salt;
  let hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");

  if (dbPassword === hashPassword) {
    console.log("비밀번호 일치");
    res.json({
      message: "userId",
      result_code: 200
    });
    res.redirect("/index");
  } else {
    console.log("비밀번호 불일치");
    res.redirect("/index");
  }
});
*/
module.exports = router;
