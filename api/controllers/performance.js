exports.performance = (req, res) => {
  const { arquitectura, software } = req.body;
  let perfomanceCpu = arquitectura.type === "intel" ? this.perfomanceIntel(arquitectura, software) : this.perfomanceAmd(arquitectura, software);
  let perfomanceGpu = this.perfomanceGpu(arquitectura, software);

  res.status(200).send(perfomanceCpu);
};

exports.perfomanceIntel = (arquitectura, software) => {
  const { Cores, Clock } = arquitectura.cpu;
  let min = this.parseToInt(Clock) > this.parseToInt(software.min.intel);
  let med = this.parseToInt(Clock) > this.parseToInt(software.med.intel);
  if (min === true && med === true) {
    return "Very good";
  }
  if (min === true) {
    return "Good";
  }
  return "Bad";
};

exports.parseToInt = (string) => {
  const tmp = string.split("");
  let map = tmp.map(function (str) {
    if (!isNaN(parseInt(str))) {
      return str;
    }
  });
  let numbers = map.filter(function (value) {
    return value != undefined;
  });
  let coreParse;
  if (numbers.length > 2) {
    coreParse = numbers[0] + "." + numbers[1];
  } else {
    coreParse = numbers[0];
  }
  return coreParse;
};

exports.perfomanceAmd = (arquitectura, software) => {
  const { Clock } = arquitectura.cpu;
  let min = this.parseToInt(Clock) > this.parseToInt(software.min.amd);
  let med = this.parseToInt(Clock) > this.parseToInt(software.med.amd);
  if (min === true && med === true) {
    return "Very good";
  }
  if (min === true) {
    return "Good";
  }
  return "Bad";
};

exports.perfomanceGpu = (arquitectura, software) => {
  const { Memory } = arquitectura.gpu;
  console.log("Gpu");
  console.log("Perfonmance", this.parseToInt(Memory) > this.parseToInt(software.min.gpu));
};