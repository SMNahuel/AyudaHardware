import React, { useEffect, useState } from "react";
import axios from "axios";

const Gpu = () => {
  const [list, setList] = useState("");

  useEffect(async () => {
    await axios.get("http://localhost:5000/gpu").then((data) => setList(data));
    console.log(list);
  }, []);

  return <div></div>;
};

export default Gpu;
