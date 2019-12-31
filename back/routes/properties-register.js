const express = require("express");
const router = express.Router();
const multer = require("multer");
const contentinfo = require("../models").contentinfo;
const dateformat = require("dateformat");
var Web3 = require("web3");
let id;
let basicPath = "../uploads/";

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

// 매물등록
router.post("/roomRegister", upload.array("imgFile"), async function(req, res) {
  if (!req.session.logined) {
    //비로그인일떄
    res.redirect("/");
  } else {
    //로그인일떄
    let files = req.files;
    
    let path = "";
    for (let i = 0; i < files.length; i++) {
      let { filename } = files[i];
      path = basicPath + filename + "," + path;
    }
    
    //DB에 매물정보 저장
    let now = new Date();
    //주소,매물형태,가격,층수,방평수,방개수, 매물등록자의 DB number값, 이미지경로, 등록날짜
    await contentinfo.create({
      address: req.body.userAddress,
      roomtype: req.body.roomType,
      price: req.body.roomPrice,
      floor: req.body.roomFloor,
      roomsize: req.body.roomArea,
      roomcount: req.body.roomNumber,
      owner_id: req.session.number,
      imgpath: path,
      date: dateformat(now, "isoDate"),
      phonenumber: req.session.phonenumber,
      text: req.body.roomOption,
      owneraccount : req.session.useracc
    });
    res.redirect("/");
  }
});

//로그아웃
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.render("index");
});

//페이지 로드
router.get("/", (req, res) => {
  if (!req.session.logined) {
    //비로그인일떄 메인페이지로
    res.redirect("/");
  } else {
    id = req.session.userid;
    acc = req.session.useracc;
 
    res.render("properties-register",
    {
      islogined: req.session.logined,
      userid :  id,
      useracc : acc
    });
  }
});

module.exports = router;
