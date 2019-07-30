import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import theme from "./components/Theme";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Home />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
