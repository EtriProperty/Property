module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "replycontent",
    {
      number: {
        type: DataTypes.INTEGER(11),
        // allowNull: false,
        primaryKey: true
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      user: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      owner: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      rtime: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      tableName: "replycontent"
    }
  );
};
