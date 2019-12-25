const express = require("express");
const router = express.Router();

// router.post("/roomRegister", (req, res) => {
//   console.log("매물생성 호출 통과");
//   //수정해야할부분
// });
//매물등록 페이지 로드

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.render("index.html");
});

router.get("/", (req, res) => {
  console.log("여기통과");
  if (!req.session.logined) {
    //비로그인일떄
    res.redirect("/");
  } else {
    res.render("properties-register.html");
  }
});

module.exports = router;
