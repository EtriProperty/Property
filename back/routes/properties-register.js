const express = require("express");
const router = express.Router();
const multer = require("multer");
let id;
let basicPath = "../uploads/";
let path = "";

/*
const upload = multer({
  storage: multer({
    {dest: "uploads/",filename: function(req, file, cb) {
      cb(null, new Date().valueOf() + "_id_" + file.originalname);
    }}
    
  })
});
*/
/*function(req, file, cb) {
      cb(null, new Date().valueOf() + "_id_" + file.originalname);
    }*/
/*
const upload = multer.diskStorage({destination: './uploads/',
filename: function ( req, file, cb ) {
    //req.body is empty...
    //How could I get the new_file_name property sent from client here?
    cb( null, file.originalname+ '-' + Date.now()+".jpg");});
    */

// router.post("/roomRegister", (req, res) => {
//   console.log("매물생성 호출 통과");
//   //수정해야할부분
// });
//매물등록 페이지 로드
const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function(req, file, cb) {
      cb(null, new Date().valueOf() + "-" + id + "-" + file.originalname);
    }
  })
});

router.post("/roomRegister", upload.array("imgFile"), async function(req, res) {
  if (!req.session.logined) {
    //비로그인일떄
    console.log("세션없다");
    res.redirect("/");
  } else {
    //로그인일떄
    let files = req.files;
    for (let i = 0; i < files.length; i++) {
      let { filename } = files[i];
      path = path + basicPath + filename + ",";
    }
    console.log("밖에 :" + path); // 잘됨
    //DB에 contentinfo에 저장해야함
  }
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.render("index.html");
});

router.get("/", (req, res) => {
  if (!req.session.logined) {
    //비로그인일떄
    res.redirect("/");
  } else {
    id = req.session.userid;
    res.render("properties-register.html");
  }
});

module.exports = router;
