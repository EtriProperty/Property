const express = require("express");
const router = express.Router();

//마이페이지
router.get("/membershipInfoRe", (req, res) => {
  if (!req.session.logined) {
    //비로그인일떄
    res.render("index.html");
  } else {
    res.render("membershipInfoRe.html");
  }
});

// 로그아웃 API
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.render("index.html");
});

// 페이지로드 API
router.get("/", async (req, res) => {
  if (!req.session.logined) {
    //비로그인일떄
    res.render("index.html");
  } else {
    //이미 로그인 상태일떄
    res.render("index.html"); //비로그인페이지로수정해야함
  }
});

module.exports = router;
