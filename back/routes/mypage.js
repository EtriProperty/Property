const express = require("express");
const router = express.Router();

//마이페이지
router.get("/", (req, res) => {
  if (!req.session.logined) {
    //비로그인일떄
    res.render("index.html");
  } else {
    res.render("membershipInfoRe.html");
  }
});

module.exports = router;
