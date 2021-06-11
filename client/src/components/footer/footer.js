import React from 'react';
import { useHistory } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    marginTop: 50,
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const Footer = () => {
  const classes = useStyles();
  var history = useHistory()
  return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
        <MenuItem onClick={() => history.push('/about')}>
            Sobre Nosotros
        </MenuItem>
        </Toolbar>
      </AppBar>
  );
}

export default Footer;