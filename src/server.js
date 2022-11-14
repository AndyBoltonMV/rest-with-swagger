const express = require("express"),
  cors = require("cors"),
  app = express(),
  { userRouter } = require("./User"),
  { contentRouter } = require("./Content");

app
  .use(cors())
  .use(express.json())
  .use("/user", userRouter)
  .use("/content", contentRouter);

module.exports = app;
