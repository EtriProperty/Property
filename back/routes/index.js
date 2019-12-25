const express = require("express");
const router = express.Router();
const userModel = require("../models").userinfo;

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.render("index.html");
});
// GET home page.
router.get("/", async (req, res, next) => {
  if (!req.session.logined) {
    //비로그인일떄
    res.render("index.html");
  } else {
    //이미 로그인 상태일떄
    res.render("login_on_index.html");
  }
});

module.exports = router;
