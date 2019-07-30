import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Theme from "./Theme";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <AppBar position="static">
          <Toolbar className="header">
            <Typography variant="title" color="inherit">
              MC
            </Typography>
            <div className="buttonGroup">
              <Button color="inherit">Profile</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Contact</Button>
              <Button color="inherit">Resume</Button>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
