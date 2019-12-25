module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "contentinfo",
    {
      number: {
        type: DataTypes.INTEGER(11),
        // allowNull: false,
        primaryKey: true
      },
      floor: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      owner_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "userinfo",
          key: "number"
        }
      },
      price: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      roomtype: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      roomcount: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      roomsize: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      imgpath: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(200),
        allowNull: false
      }
    },
    {
      tableName: "contentinfo"
    }
  );
};
