import React, { useState } from "react";
import Button from "@material-ui/core/Button"; //Importacion de botones
import {
  FormControl,
  InputLabel,
  Input,
  FormLabel,
  Grid,
} from "@material-ui/core";
import axios from "axios";

const Login = () => {
  //Iniciamos un estado para poder guardar los datos de los inputs y damos estado de inicio con UseState
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //Función encargada de hacer la peticion de Login al server
  const getLogin = () => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    axios
      .post("http://localhost:5000/auth/login", input)
      .then(({ data }) => console.log(data));
  };

  return (
    <Grid
      container
      spacing={1}
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
            onChange={(e) => setInput({...input, email: e.target.value })}
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
        <Button variant="contained" color="primary" onClick={() => getLogin()}>
          Iniciar sesion
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
