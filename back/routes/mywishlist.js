const express = require("express");
const router = express();
const contentinfo = require("../models").contentinfo;

/*
router.get("/userInfoUpdate", function(req, res) {
     res.render("index"); 경로 맞음
});
*/

//찜 등록 API + 중복찜등록 방지 완료
router.get("/addmywishlist", async (req, res) => {
  if (!req.session.logined) {
    //비로그인 일떄
    res.redirect("/");
  } else {
    let detail_page = req.session.properties_detail_page;
    let checkid = req.session.userid;
    req.session.properties_detail_page = null;
    let previousetext = await contentinfo.findAll({
      where: { number: detail_page }
    });
    let result1 = previousetext[0].dataValues.wishid;
    if (result1.indexOf(checkid) === -1) {
      await contentinfo.update(
        { wishid: result1 + req.session.userid },
        { where: { number: detail_page } }
      );
    }
    res.redirect("/");
  }
});

router.get("/", (req, res) => {
  if (!req.session.logined) {
    res.redirect("/");
  } else {
    res.render("[mp]myWishList");
  }
});

module.exports = router;
