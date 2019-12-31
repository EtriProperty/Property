const express = require("express");
const router = express.Router();
const dateformat = require("dateformat");
const contentinfo = require("../models").contentinfo;
const replycontent = require("../models").replycontent;
const userinfo = require("../models").userinfo;
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


// 이 페이지에는 ownerid와 cotentinfo.ownerid랑 강튼사람만 들어갈수 있게 해야함
// session에 저장된 req.session userid == contentinfo.owernid 일때만 접속가능 
router.get("/:page", async (req, res) => {

  let page = req.params.page;
  req.session.properties_detail_page = page;
  //여기정상
  
  let userResult = await userinfo.findOne({
    where: { id : req.session.userid } // 구매자 아이디가 들어가야함..
  });
    let {
        phone,
        name,
        email,
        ethaccount
    } = userResult.dataValues;
    
    let userdetail = {
        phone : phone,
        name : name,
        email : email,
        ethaccount : ethaccount
    }

  
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
    owneraccount,
  } = result.dataValues;
  let number = result.dataValues.number;
  let ownerID = result.dataValues.owner_id;
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

  
  userinfo.findAll({where:{number : ownerID}}).then (result =>{
    
        let ownerdetail = {
            ownid : result[0].id,
            ownername : result[0].name,
            owneremail : result[0].email,
            ownerphone : result[0].phone,
            ownerethaccount : result[0].ethaccount
        }
       
        res.render("contracting", {
            data: detail,
            userdata : userdetail,
            ownerdata : ownerdetail,
            useracc : req.session.useracc,
            islogined : req.session.logined,
            userid: req.session.userid
            
          });
      
  });
 
});


router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("../");
});

module.exports = router;
