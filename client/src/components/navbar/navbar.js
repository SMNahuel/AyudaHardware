import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actionCreaton.js";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffeedb",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();
  var history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push("/")}
          >
            Ayuda Hardware
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => history.push("/pc")}>
                <DesktopMacIcon /> Armar PC
              </MenuItem>
              <MenuItem onClick={() => history.push("/forum")}>
                <ForumIcon /> Foro
              </MenuItem>
              {/*               {email && (
                <MenuItem onClick={() => dispatch(logout())}>
                  <ExitToAppIcon /> Logout
                </MenuItem>
              )}
              {!email && (
                <MenuItem onClick={() => history.push("/login")}>
                  <AccountBoxIcon /> Ingresar
                </MenuItem>
              )} */}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
