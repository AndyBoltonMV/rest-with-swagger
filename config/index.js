require("dotenv").config();

module.exports = {
  db: require("./db"),
  port: process.env.PORT || 5001,
};
