const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
var port = 3000;
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const propertysearchRouter = require("./routes/properties-search");
const propertyregisterRouter = require("./routes/properties-register");
const registerRouter = require("./routes/register");
const propertydetailRouter = require("./routes/properties-detail");
const contractingRouter = require("./routes/contracting");
const userFinalContractRouter = require("./routes/userFinalContract");
const sequelize = require("./models").sequelize;
const mywishlist = require("./routes/mywishlist");
const passportkey = require("./config/passport");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("public"));
app.use(express.static("uploads"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//세션 생명주기 24시간
app.use(
  session({
    secret: passportkey.secret,
    resave: false,
    saveUninititallized: true,
    store: new FileStore(),
    maxAge: 24 * 60 * 60 * 100
  })
);

app.use("/login", loginRouter); //로그인 api
app.use("/register", registerRouter); //회원가입 api
app.use("/properties", propertysearchRouter); //매물찾기 api
app.use("/properties-register", propertyregisterRouter); // 매물등록 api
app.use("/mywishlist", mywishlist); //찜목록 + 마이페이지 api
app.use("/properties-detail", propertydetailRouter); //매물 상세보기
app.use("/contracting",contractingRouter); // 집주인승인
app.use("/userFinalContract",userFinalContractRouter); //최종승인
app.use("/", indexRouter); //메인 api

sequelize.sync();

app.listen(port, function() {
  console.log("express start");
});

module.exports = app;
