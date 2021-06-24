import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SuccessRegister = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  });
  return (
    <div>
      <h1>Registro exitoso</h1>
    </div>
  );
};

export default SuccessRegister;
