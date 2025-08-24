const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const excelController = require("../controllers/excel.controller");
const multer = require("multer");

const upload = multer({dest :"uploads/"});

router.post('/readexcel', upload.single("file"), excelController.readExcell);
router.post('/writeexcel', excelController.writeExcel);

module.exports = router;