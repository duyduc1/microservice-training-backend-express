const express = require('express');
const uploadRouter = require("./upload.router")
const excelRouter = require('./excel.router');

const router = express.Router();

router.use("/upload", uploadRouter);
router.use("/excel", excelRouter);

module.exports = router;