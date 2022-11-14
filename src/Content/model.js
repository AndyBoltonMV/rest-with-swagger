const { DataTypes, Model } = require("sequelize"),
  { db } = require("../../config");

class Content extends Model {}

Content.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Content",
  }
);

module.exports = Content;
