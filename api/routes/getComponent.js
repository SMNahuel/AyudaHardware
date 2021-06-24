const express = require("express");
const { getCpuAmd, getCpuIntel, getGpu } = require("../controllers/pcparts.js");
const router = express.Router();

router.get("/gpu", getGpu);

router.get("/amd", getCpuAmd);

router.get("/intel", getCpuIntel);

module.exports = router;
