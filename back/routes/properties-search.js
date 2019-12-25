const express = require("express");
const router = express.Router();

//매물등록 페이지 로드
router.get("/", (req, res) => {
  //로그인 비로그인 똑같이 검색
  res.render("properties.html");
});

module.exports = router;
