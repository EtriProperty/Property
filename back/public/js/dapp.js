console.log('starting...');
//connect web3 and check if web3 is connected correctly
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
}

if (web3.isConnected()) {
  console.log("connected");
} else {
  console.log("not connected");
  exit;
  
}

var contractAddress = "0xdcd6ccf3bfba30afbceb59608977ed50af004fb8";
var vc = web3.eth.contract([
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
]).at(contractAddress);

function addRoom(){
 var id_value    = $('#contentNumber').text();
 var ownerEthAcc = $('#ethaccount').val();
 var userEthAcc =$('#userEthAcc').val();
 var cotentprice =$('#contentPrice').text();
    id_value = Number(id_value);
    cotentprice = Number(cotentprice);

    console.log(id_value);
    console.log(ownerEthAcc);
    console.log(userEthAcc);
    console.log(cotentprice);

 vc.contentRegister(id_value,cotentprice,ownerEthAcc, { from:userEthAcc, gas: 2000000 }, function (err, result) {
   if(!err){
     alert("계약이 완료되었습니다");
     location.href="/";
   }
    });
}

function ownerCheck(){
    var userEthAcc = $('#userEthAcc').text();
    var ownerEthAcc = $('#ownerEthAcc').text();
    var contentID = $('#contentID').text();

    contentID = Number(contentID);
    console.log(contentID);
    vc.contractOwner(contentID,{from:ownerEthAcc,gas:2000000},function(err,result){
        if(!err){
            alert(" 승인 완료하셨습니다. \n 임차인이 승인하면 거래가 끝납니다! \n 계약 후 꼭 만나서 확인해주세요");
        }
    });
}

function userFinalCheck(){
    var userEthAcc = $('#userEthAcc').text();
    var ownerEthAcc = $('#ownerEthAcc').text();
    var contentID = $('#contentID').text();
    var contentPrice = $('#contentPrice').text();
    contentPrice = Number(contentPrice);
    contentID = Number(contentID);
    console.log(contentPrice);
    console.log(contentID);
    vc.contentSubmit(contentID,{from:userEthAcc,gas:2000000,value:web3.toWei(contentPrice,"ether")},function(err,result){
        if(!err){
            alert(" 승인 완료하셨습니다. \n 임차인이 승인하면 거래가 끝납니다! \n 계약 후 꼭 만나서 확인해주세요");
        }
    });
}
