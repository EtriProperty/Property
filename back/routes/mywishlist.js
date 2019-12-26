const express = require("express");
const router = express();

/*
router.get("/userInfoUpdate", function(req, res) {
     res.render("index.html"); 경로 맞음
});
*/

router.get("/", (req, res) => {
  if (!req.session.logined) {
    res.redirect("/");
  } else {
    res.render("[mp]myWishList.html");
  }
});

module.exports = router;
