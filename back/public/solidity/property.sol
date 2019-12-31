pragma solidity ^0.4.25;

contract plan {
  uint public regCount = 0;
  address public ownerAdd;

  struct content{
      uint contentID; //  방번호
      address user; // 유저 계좌
      address owner; // 집주인 계좌
      uint price; // 가격
      bool ownerCheck; // 집주인 승인
      bool contractingCheck; // 계약중인지 체크 true : 체크 false : 아님
      bool contractCompleted;
  }
  struct Owner{
   address ownerAddress;
  }
  struct checkOwner{
    address owenerAddress;
  }
  
  event contractCompleted(
    uint id,
    bool ownerCheck,
    bool userCheck
  );

  mapping(uint => Owner) public owners;
  mapping(uint => content) public contents;
 
  function contentRegister(uint _contentID,uint _price,address _owner) public{
      content[_contentID] =content(_contentID,msg.sender,_owner,false,true,false);
  }  // 유저가 가계약하기 버튼 눌렀을시 
  
  function contentSubmit(uint _contentID) public payable{
    require(contents[_contentID].ownerCheck==true && contents[_contentID].contractingCheck==true);
     content memory _content = contents[_contentID];
      _content.contractCompleted = true;
      contents[_contentID]=_content;

  } 
  
  function getContent(uint _contentID) public view returns(uint,address,address, bool, bool,uint){
      return (contents[_contentID].contentID, contents[_contentID].owner, contents[_contentID].user,contents[_contentID].contractingCheck, contents[_contentID].ownerCheck,contents[_contentID].price,contents[_contentID].contractCompleted);
  }
  function getContractingCheck(uint _contentID) public view returns(bool)
  {
      return contents[_id].contractingCheck;-
  }
  
 


function contractOwner(uint _contentID) public {
      content memory _content = contents[_contentID];
      _content.ownerCheck = true;
      contents[_contentID]=_content;
  }

  
  
}




