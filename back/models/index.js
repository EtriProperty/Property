var Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development"; // 배포시에는 confing.json에서 production으로 바꾸고 배포하면된다.
const config = require("../config/config.json")[env];
var db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델 라우트
db.userinfo = require("./userinfo")(sequelize, Sequelize);
db.contentinfo = require("./contentinfo")(sequelize, Sequelize);
db.replycontent = require("./replycontent")(sequelize, Sequelize);


//관계정의

db.userinfo.hasMany(db.contentinfo, {
  sourceKey: "number",
  foreignKey: "owner_id"
});

db.contentinfo.belongsTo(db.userinfo, {
  targetKey: "number",
  foreignKey: "owner_id"
});

module.exports = db;
