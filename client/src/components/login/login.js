import React from 'react';
import {FormHelperText, Icon, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button' //Importacion de botones
import {FormControl, InputLabel, Input, FormLabel, Grid} from '@material-ui/core';



const Login = () => {

    
    return(
       
        <Grid container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh'}} >
            <Grid item md={12}>
                <FormControl >
                    <FormLabel></FormLabel>
                    <InputLabel htmlFor=''>Email</InputLabel>
                    <Input id='email' type='email' aria-aria-describedby='email-helper' />
                    <FormHelperText id='email-helper'>Ingresa tu direccion de email</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <FormControl>
                    <InputLabel htmlFor=''>Password</InputLabel>
                    <Input id='pwd' type='password' aria-aria-describedby='password-helper' />
                    <FormHelperText id='password-helper'>Ingresa tu password</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <Button variant='contained' color='primary'>
                    Iniciar sesion
                </Button>
            </Grid>
        </Grid>


    )
}

export default Login;