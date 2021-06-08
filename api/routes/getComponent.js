const express = require('express');
const {getCpu, getCpuAmd, getCpuIntel, getGpu} = require("../controllers/pcparts.js");
const router = express.Router();

router.get('/', getCpu);

router.get('/amd', getCpuAmd);

router.get('/intel', getCpuIntel);

router.get('/gpu', getGpu);

module.exports = router;