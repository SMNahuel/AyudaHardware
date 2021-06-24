import React, { useEffect, useState } from "react";
import axios from "axios";

const Gpu = () => {
  const [list, setList] = useState("");

  useEffect(async () => {
    axios.get("http://localhost:5000/part/gpu").then((data) => setList(data));
  }, []);

  return <div></div>;
};

export default Gpu;
