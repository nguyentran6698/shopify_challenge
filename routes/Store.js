const express = require("express");
const router = express.Router();
const { getAllStores, createStore, getStore } = require("../controllers/Store");
router.route("/").get(getAllStores).post(createStore);
router.route("/:id").get(getStore);

module.exports = router;
