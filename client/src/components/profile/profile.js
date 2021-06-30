import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./profile.module.css";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //Iniciamos un estado para poder guardar los datos de los inputs y damos estado de inicio con UseState
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [state, setState] = useState({
    isLoading: "",
  });
  
  const handleProfile = async () => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    try {
      setState({ isLoading: true });
      const response = await axios.post("http://localhost:5000/auth/profile", {
        name: input.name,
        password: input.password,
        email: input.email,
      });
      if (response.status === 200) history.push("/success_register");
      if (response.status !== 200) return alert("Error revise los datos");
    } catch (error) {
      console.log(error);
    } finally {
      setState({ isLoading: false });
    }
  };
  
  

  return (
    <div className={style.container}>
      <ValidatorForm
        onError={() => alert("No puede hacer esto")}
        onSubmit={() => handleProfile()}
      >
          <TextValidator
            style={{ margin: "20px" }}
            label="Cambiar Nombre"
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            validators={["required"]}
            errorMessages={["Es un valor requerido"]}
          />
        <TextValidator
          style={{ margin: "20px" }}
          label="Cambiar Email"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          validators={["required", "isEmail"]}
          errorMessages={["Es un valor requerido", "Ingrese un mail valido"]}
        />
        <TextValidator
          style={{ margin: "20px" }}
          label="Cambiar Password"
          name="password"
          type="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          validators={["required"]}
          errorMessages={["Es un valor requerido"]}
        />
        <Button
          style={{ margin: "20px" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Guardar Cambios
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default Profile;
