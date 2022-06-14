const express = require('express');
const path = require("path");

const cors = require("cors");

const app = express();

const port = parseInt(process.env.PORT) || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router
const router = require('./router.js');

app.use(router)


module.exports = app;