const express = require("express");
const router = express.Router();
const dateformat = require("dateformat");
const contentinfo = require("../models").contentinfo;
const replycontent = require("../models").replycontent;
var Web3 = require("web3");
let ownerid;


web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/3cbbefee6e0e465dba3374761c8cc7d1"));
var vc = new web3.eth.Contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "owners",
		"outputs": [
			{
				"name": "ownerAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_contentID",
				"type": "uint256"
			}
		],
		"name": "getContent",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_contentID",
				"type": "uint256"
			},
			{
				"name": "_price",
				"type": "uint256"
			},
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "contentRegister",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_contentID",
				"type": "uint256"
			}
		],
		"name": "contentSubmit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "regCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ownerAdd",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_contentID",
				"type": "uint256"
			}
		],
		"name": "contractOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_contentID",
				"type": "uint256"
			}
		],
		"name": "getContractingCheck",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contents",
		"outputs": [
			{
				"name": "contentID",
				"type": "uint256"
			},
			{
				"name": "user",
				"type": "address"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "ownerCheck",
				"type": "bool"
			},
			{
				"name": "contractingCheck",
				"type": "bool"
			},
			{
				"name": "contractCompleted",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "ownerCheck",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "userCheck",
				"type": "bool"
			}
		],
		"name": "contractCompleted",
		"type": "event"
	}
],"0xc796b43900c392166d2f9d6b4616964df5e8b2cd");


//후기 콜 function 완료
async function replylistcall() {
  let data = await replycontent.findAll({
    where: {
      owner: ownerid
    }
  });
  let count = data.length;
  let array = new Array();
  for (let i = 0; i < count; i++) {
    //주소,연락처,매물형태,가격,방개수,방평수
    let { content, user, rtime } = data[i].dataValues;
    // console.log(content, user, rtime);
    //프론트로 전송
    array.push({
      user: user,
      content: content,
      rtime: rtime
    });
  }
  return array;
}

//후기 등록 API 완료
router.post("/reply/:page", async (req, res) => {
  if (!req.session.logined) {
    //비로그인 일떄
    res.redirect("/:page");
  } else {
    let content = req.body.content;
    let now = new Date();
    await replycontent.create({
      content: content,
      user: req.session.userid,
      owner: ownerid,
      rtime: dateformat(now, "isoDate")
    });
  }
});

//이미지로드 API
router.post("/imgload", (req, res) => {
  console.log(req.params.page);
  img = {
    img: "1577431527928-dong-원룸5-1.JPG"
  };
  res.render("properties-detail", {
    imgpath: img
  });
});

//상세페이지 로드 API
router.get("/:page", async (req, res) => {
  let page = req.params.page;
  req.session.properties_detail_page = page;
  //여기정상
  let result = await contentinfo.findOne({
    where: { number: page }
    //where : { address : "관악구" }
  });
  let {
    price,
    roomtype,
    roomcount,
    roomsize,
    imgpath,
    address,
    phonenumber,
    text,
	owneraccount
  } = result.dataValues;
  let number = result.dataValues.number;

  let pure = imgpath.split(",")[0].split("/")[2];

  ownerid = result.dataValues.imgpath.split("-")[1];
  let detail = {
    number: number,
    roomtype: roomtype,
    address: address,
    roomsize: roomsize,
    roomcount: roomcount,
    price: price,
    phonenumber: phonenumber,
    text: text,
    img: pure,
    owneraccount : owneraccount
  };
  res.render("properties-detail", {
    data: detail,
    useracc : req.session.useracc,
    islogined : req.session.logined,
    userid: req.session.userid,
    array: await replylistcall()
  });
});



router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("../");
});

module.exports = router;
