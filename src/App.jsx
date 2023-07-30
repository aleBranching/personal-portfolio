import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import Home from "./Home";
// import KeyProjects from "./KeyProjects";
import KeyProjects from "./KeyProjects";
import { yellow } from "@mui/material/colors";
import AboutMe from "./AboutMe";

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
  sizing: {
    globalPadding: "2rem",
  },
  palette: {
    primary: {
      main: "#EF4444",
      darker: "#053e85",
    },
    test: {
      main: "#EF4444",
      darker: "#EF4444",
    },
    custom: {
      red: "#EF4444",
      yellow: "#EAB308",
    },
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Home></Home>
        {/* <KeyProjects></KeyProjects> */}
        <KeyProjects></KeyProjects>
        <AboutMe></AboutMe>
      </ThemeProvider>
    </div>
  );
}

export default App;
