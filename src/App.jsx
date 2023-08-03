import { useDebugValue, useEffect, useRef, useState } from "react";
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
  const keyProjectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactMeRef = useRef(null);

  const scrollToProjects = () => {
    console.log("here");
    // console.log(ref);
    keyProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAboutMe = () => {
    console.log("here");
    // console.log(ref);
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContactMe = () => {
    console.log("here");
    // console.log(ref);
    contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Home
          scrollToProjects={scrollToProjects}
          scrollToAboutMe={scrollToAboutMe}
          scrollToContactMe={scrollToContactMe}
        ></Home>
        {/* <KeyProjects></KeyProjects> */}
        <div ref={keyProjectsRef}>
          <KeyProjects></KeyProjects>
        </div>
        <div ref={aboutMeRef}>
          <AboutMe ref={contactMeRef}></AboutMe>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
