import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "@material-ui/core/Button"; //Importacion de botones
import { FormHelperText } from "@material-ui/core";
import { FormControl, InputLabel, Input, Grid } from "@material-ui/core";

const Register = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [state, setState] = useState({
    isLoading: "",
  });

  const handleRegister = async () => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    try {
      setState({ isLoading: true });
      const response = await axios.post("http://localhost:5000/auth/register", {
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
          <InputLabel htmlFor="">Nombre</InputLabel>
          <Input id="name" type="text" />
          <FormHelperText id="name-helper">Ingresa tu nombre</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item md={12}>
        <FormControl>
          <InputLabel htmlFor="">Apellido</InputLabel>
          <Input
            id="lastName"
            type="text"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
          <FormHelperText id="lastname-helper">
            Ingresa tu apellido
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item md={12}>
        <FormControl>
          <InputLabel htmlFor="">Email</InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <FormHelperText id="email-helper">
            Ingresa tu direccion de email
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item md={12}>
        <FormControl>
          <InputLabel htmlFor="">Password</InputLabel>
          <Input
            id="pwd"
            type="password"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <FormHelperText id="password-helper">
            Ingresa tu password
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item md={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleRegister()}
        >
          Registrarse
        </Button>
      </Grid>
    </Grid>
  );
};

export default Register;
