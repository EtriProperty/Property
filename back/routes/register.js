const express = require("express");
const router = express();
const userinfo = require("../models").userinfo;
const crypto = require("crypto");

router.post("/register_on", async (req, res) => {
  const body1 = req.body;
  const id = body1.userid;

  console.log(body1);
  console.log(id);
  let result = await userinfo.findAll({
    where: {
      id: id
    }
  });
  console.log(result);
  if (Object.keys(result).length === 0) {
    //중복 아이디가 없을떄
    let salt = Math.round(new Date().valueOf() * Math.random()) + "";
    let hashPassword = crypto
      .createHash("sha512")
      .update(body1.userpassword + salt)
      .digest("hex");
    await userinfo.create({
      //DB에 저장, 잘들어감
      id: body1.userid,
      password: hashPassword,
      name: body1.username,
      email: body1.useremail,
      phone: body1.userphonenumber,
      auth: 1,
      salt: salt
    });
    res.redirect("/registerDone.html");
  } else {
    //아이디가 이미 있을때, 409 에러 던져줌
    //원하는건 에러를 던져주면서 리다이렉트하는거, res.json 해서 메시지전송하면서 redirect하면 오류남
    res.status(403);
    res.json({
      message: body1.userid,
      result_code: res.statusCode
    });
    //res.redirect("register.html");
  }
});

/* GET register page. */
router.get("/", (req, res) => {
  res.render("register.html");
});

module.exports = router;
