import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import Home from "./Home";
import KeyProjects from "./KeyProjects";

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
  palette: {
    custom: {
      red: "#EF4444",
      yellow: "#F38911",
    },
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Home></Home>
        <KeyProjects></KeyProjects>
      </ThemeProvider>
    </div>
  );
}

export default App;
