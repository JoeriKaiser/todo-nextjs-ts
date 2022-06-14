const express = require("express");


const {
  ItemController
} = require('./controllers');

const router = express.Router();

router.get("/items", ItemController.browse);

module.exports = router