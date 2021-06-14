import React, { useState } from "react";

import Cpu from "./cpu/cpu.js";
import Gpu from "./gpu/gpu.js";

const Pcparts = () => {
  const [parts, setParts] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    motherboard: "",
    disk: "",
  });

  const handleSetPart = (part, type) => {
    console.log(part, type);
    setParts({
      ...parts,
      [type]: part,
    });
  };
  return (
    <div>
      {!parts.cpu && <Cpu handleSetPart={handleSetPart} />}
      {parts.cpu && <Gpu handleSetPart={handleSetPart} />}
      {/*       {!parts.ram && <Cpu setParts={handleSetPart} />}
      {!parts.motherboard && <Cpu setParts={handleSetPart} />}
      {!parts.disk && <Cpu setParts={handleSetPart} />} */}
    </div>
  );
};

export default Pcparts;
