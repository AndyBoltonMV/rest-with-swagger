const router = require("express").Router();
const { create, read, update, del } = require("./controllers");

router.post("/", create).get("/", read).put("/", update).delete("/", del);

module.exports = router;
