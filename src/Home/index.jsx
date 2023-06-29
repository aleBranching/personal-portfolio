import { Box, Typography } from "@mui/material";
import LineUnder from "../components/LineUnder";
import Navbar from "./Navbar";
import profilePic from "../assets/selfie.jpg";
import speedGif from "../assets/speed.gif";
import { useState } from "react";
// import { css } from "@emotion/react";
// import { css } from "@emotion/react";

let Home = () => {
  let [isHovering, setIsHovering] = useState(false);

  let handleMouseOver = (e) => {
    console.log(e);
    setIsHovering(!isHovering);
  };

  return (
    <>
      <div className="aPage homePage">
        <Navbar></Navbar>

        <Box
          height="calc(100vh - 12rem)"
          width="100vw"
          // backgroundColor="rgb(18 24 27 / var(--tw-bg-opacity))"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          padding="0 5rem"

          // sx={{
          //   backgroundColor: "red",
          // }}
        >
          <Typography variant="h4" color="white" maxWidth="50rem">
            Welcome to my portfolio website! I'm a passionate web developer
            eager to bring creative ideas to life. With a{" "}
            <Typography
              variant="h4"
              display="inline"
              // color="white"
              color="#EF4444"
              position="relative"
              onMouseEnter={(e) => handleMouseOver(e)}
              onMouseLeave={(e) => handleMouseOver(e)}
            >
              hunger{" "}
              {isHovering && (
                <img
                  src={speedGif}
                  height="150%"
                  width="120%"
                  style={{
                    position: "absolute",
                    top: "-3rem",
                    left: "-0.5rem",
                  }}
                ></img>
              )}
            </Typography>{" "}
            to learn and a fresh perspective, I specialize in and functional
            websites. Let's collaborate and create something amazing together!
          </Typography>
          <img
            style={{
              borderRadius: "50%",
              minWidth: "20rem",
              objectFit: "cover",
              height: "20rem",
              objectPosition: "80% 50%",
            }}
            src={profilePic}
          ></img>
        </Box>
        <Box
          height="5rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
        >
          <Typography display="block" variant="h3" color="white">
            Reasons to hire
          </Typography>
          <span className="bounce">👇</span>
        </Box>
      </div>
    </>
  );
};

export default Home;
