const gpu = require("../parts/gpu_database.json");
const amdCpu = require("../parts/amd_cpu_database.json");
const intelCpu = require("../parts/intel_cpu_database.json");

exports.getCpuAmd = async (req, res) => {
  res.status(200).send(amdCpu);
};

exports.getCpuIntel = async (req, res) => {
  res.status(200).send(intelCpu);
};

exports.getGpu = (req, res) => {
  res.status(200).send(gpu);
};
