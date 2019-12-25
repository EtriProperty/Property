const express = require("express");
const router = express();
const userinfo = require("../models").userinfo;
const session = require("express-session");
const crypto = require("crypto");

//로그인 기능만(입력받은 비밀번호와 db의 비밀번호와 비교 후 넘겨줌)
router.post("/login_on", async function(req, res, next) {
  const body1 = req.body;
  const id = body1.userid;

  let result = await userinfo.findOne({
    where: {
      id: id
    }
  });

  let dbPassword = result.dataValues.password;
  let salt = result.dataValues.salt;
  let inputPassword = body1.password;
  let hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");

  if (dbPassword === hashPassword) {
    req.session.logined = true;
    req.session.userid = body1.userid;
    res.redirect("/");
  } else {
    // 비밀번호불일치
    res.redirect("/");
  }
});

router.get("/index", function(req, res) {
  res.render("index.html");
});

/* GET login page. */
router.get("/", function(req, res) {
  res.render("signIn.html");
});

module.exports = router;
