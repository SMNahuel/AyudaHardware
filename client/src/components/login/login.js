import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  FormLabel,
  Grid,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actionCreaton.js";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //Iniciamos un estado para poder guardar los datos de los inputs y damos estado de inicio con UseState
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //Función encargada de hacer la peticion de Login al server
  const getLogin = () => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    axios.post("http://localhost:5000/auth/login", input).then((data) => {
      data.status === 200 && successLogin(data.data);
    });
  };

  const successLogin = (data) => {
    dispatch(login(data));
    history.push("/");
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "50vh" }}
    >
      <Grid item md={12}>
        <FormControl>
          <FormLabel></FormLabel>
          <InputLabel htmlFor="">Email</InputLabel>
          <Input
            id="email"
            required={true}
            type="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          {/*                     <FormHelperText id='email-helper'>Ingresa tu direccion de email</FormHelperText> */}
        </FormControl>
      </Grid>
      <Grid item md={12}>
        <FormControl>
          <InputLabel htmlFor="">Password</InputLabel>
          <Input
            id="pwd"
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          {/*                     <FormHelperText id='password-helper'>Ingresa tu password</FormHelperText> */}
        </FormControl>
      </Grid>
      <Grid item md={12}>
        <FormControl>
          <InputLabel htmlFor="">Repite el password</InputLabel>
          <Input
            id="pwd"
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          {/*                     <FormHelperText id='password-helper'>Ingresa tu password</FormHelperText> */}
        </FormControl>
      </Grid>
      <Grid item md={12}>
        <Button variant="contained" color="primary" onClick={() => getLogin()}>
          Iniciar sesion
        </Button>
      </Grid>
      <h3>¿Todavia no tienes cuenta?</h3>
      <Grid item md={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/register")}
        >
          Registrate
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
