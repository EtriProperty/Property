const express = require("express");
const router = express.Router();
const contentinfo = require("../models").contentinfo;

async function listcall() {
  let data = await contentinfo.findAll();
  let count = data.length;
  let array = new Array();
  for (let i = count - 1; i >= count - 4; i--) {
    //주소,연락처,매물형태,가격,방개수,방평수
    let {
      address,
      phonenumber,
      roomtype,
      price,
      roomcount,
      roomsize,
      date
    } = data[i].dataValues;
    let id = data[i].dataValues.number;
    let imgpath = data[i].dataValues.imgpath.split(",")[0];
    imgpath = imgpath.split("/");
    let mainimg = imgpath[2];
    //프론트로 전송
    array.push({
      img: mainimg,
      id: id,
      address: address,
      phonenumber: phonenumber,
      roomtype: roomtype,
      price: price,
      roomcount: roomcount,
      roomsize: roomsize,
      date: date
    });
  }
  return array;
}

// 최근 매물 로드 API
router.get("/recentList", async function(req, res) {
  return res.render("index", {
    arrays: await listcall(),
    islogined: req.session.logined
  });
});

// 로그아웃 API
router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.render("index", {
    arrays: await listcall(),
    islogined: false
  });
});

router.get("/", async (req, res) => {
  if (!req.session.logined) {
    //비로그인일떄
    res.render("index", {
      arrays: await listcall(),
      islogined: req.session.logined
    });
  } else {
    //이미 로그인 상태일떄
    res.render("index", {
      arrays: await listcall(),
      islogined: req.session.logined,
      userid: req.session.userid
    });
  }
});

module.exports = router;

/*
const express = require('express');
const router = express.Router();

//마이페이지
router.get('/membershipInfoRe', (req, res) => {
  // res.render('index.ejs');
  if (!req.session.logined) {
    //비로그인일떄
    // res.render('index.html');
    res.render('index');
  } else {
    res.render('membershipInfoRe.html');
  }
});



// 페이지로드 API
router.get('/', async (req, res) => {
  const datas = [
    {
      id: 'DBH1234',
      address: '서울시 금천구 독산동 100',
      phone: '010-5-435555',
      type: '전세/월세',
      price: '10000000',
      count: '1',
      area: '20',
      optino: '풀옵션',
    },
    {
      id: '2',
      address: '2',
      phone: '2',
      type: '2',
      price: '2',
      count: '2',
      area: '2',
      optino: '2',
    },
    {
      id: '3',
      address: '3',
      phone: '3',
      type: '3',
      price: '3',
      count: '3',
      area: '3',
      optino: '3',
    },
    {
      id: '4s3',
      address: '3',
      phone: '3',
      type: '3',
      price: '3',
      count: '3',
      area: '3',
      optino: '3',
    },
  ];

  // const title = '디방~~';

  res.render('index', { datas: datas });
  // if (!req.session.logined) {
  //   //비로그인일떄
  //   res.render('index.html');
  // } else {
  //   //이미 로그인 상태일떄
  //   res.render('index.html'); //비로그인페이지로수정해야함
  // }
});

module.exports = router;
*/
