const amdCpu = require('../parts/amd_cpu_database.json');
const intelCpu = require('../parts/amd_cpu_database.json');
const gpu = require('../parts/gpu_database.json');

exports.getCpu = (req, res)  => {
    res.status(200).send(amdCpu + intelCpu)
}

exports.getCpuAmd = async (req, res)  => {
    res.status(200).send(amdCpu)
}

exports.getCpuIntel = async (req, res)  => {
    res.status(200).send(intelCpu)
}

exports.getGpu = async (req, res)  => {
    res.status(200).send(gpu)
}

