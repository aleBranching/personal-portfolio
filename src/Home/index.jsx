import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LineUnder from "../components/LineUnder";
import Navbar from "./Navbar";
import profilePic from "../assets/selfie.jpg";
import speedGif from "../assets/speed.gif";
import { useState } from "react";
import { useEffect } from "react";
// import { css } from "@emotion/react";
// import { css } from "@emotion/react";

let Home = ({ scrollToProjects, scrollToAboutMe, scrollToContactMe }) => {
  let [isHovering, setIsHovering] = useState(false);

  let isMediumQuerry = useMediaQuery("(max-width:1250px)");

  let isMobileSmall = useMediaQuery("(max-width:700px)");
  let isMobileExtraSmall = useMediaQuery("(max-width:385px)");

  let isMobileMedium = !isMobileSmall && isMediumQuerry;
  let isSmaller = isMediumQuerry;
  let customColor = useTheme().palette.custom;

  let navBarHeight = "6.5rem"; // plus one from mt of image and paragraph + button sixe 2.5rem
  if (!isMobileSmall) navBarHeight = "3rem";
  let bottomBarHeight = `10rem`;
  if (isMobileSmall) bottomBarHeight = "10rem";
  let contentHeight = `calc(100svh - ${navBarHeight} - ${bottomBarHeight})`;

  let { globalPadding } = useTheme().sizing;

  useEffect(() => {
    // console.log("isMobileMedium", isMobileMedium);
    console.log(customColor);
    // console.log("isMobileSmall", isMobileSmall);
    // console.log("isActuallyMedium", isActuallyMedium);
  }, [isMediumQuerry, isMobileSmall]);

  let handleMouseOver = () => {
    // console.log(e);
    setIsHovering(!isHovering);
  };

  return (
    <>
      {/* <Box padding={`0 ${globalPadding}rem`}> */}
      <Box padding={`0rem 2rem 0rem 2rem`}>
        {/* <Box> */}
        <Navbar
          scrollToProjects={scrollToProjects}
          scrollToAboutMe={scrollToAboutMe}
          scrollToContactMe={scrollToContactMe}
        ></Navbar>

        {!isSmaller ? (
          <>
            <Box
              height={contentHeight}
              // width="100vw"
              width={`calc(100vw - 2*${globalPadding})`}
              // backgroundColor="rgb(18 24 27 / var(--tw-bg-opacity))"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              // padding="0 5rem"
              className="textAndPhoto"

              // sx={{
              //   backgroundColor: "red",
              // }}
            >
              <Box>
                <Typography variant="h5" color="white" maxWidth="50rem">
                  I'm a web developer based in the UK! Eager to bring creative
                  ideas to life. Seeking an opportunity to grow and make a
                  meaningful impact to a business with a supportive and
                  collaborative team.
                  {/* <Typography
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
                  </Typography>{" "} */}
                  {/* to learn and a fresh perspective, I specialize in and
                  functional websites. Let's collaborate and create something
                  amazing together! */}
                </Typography>
                <Button
                  variant="contained"
                  color="test"
                  sx={{
                    width: "10rem",
                    marginTop: "2rem",
                    height: "rem",
                    fontSize: "1.5rem",
                  }}
                  href="https://cv-hosting-ak773.s3.eu-west-2.amazonaws.com/Aleksas+Kliska+CV.pdf"
                  target="_blank"
                >
                  View CV
                </Button>
              </Box>
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
          </>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            height={`calc(100svh - 3rem)`}
          >
            <Box
              flexGrow="0.5"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* <Box flexGrow="0"> */}

              <Box
                flexGrow="1"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  style={{
                    borderRadius: "50%",
                    // marginTop: "auto",
                    // flexGrow: "1",
                    width: `${
                      isMobileExtraSmall
                        ? "40vw"
                        : isMobileSmall
                        ? "35vw"
                        : "25vw"
                    }`,
                    maxHeight: `${
                      isMobileExtraSmall
                        ? "40vw"
                        : isMobileSmall
                        ? "35vw"
                        : "25vw"
                    }`,

                    // height: "17rem",
                    // minWidth: "17rem",
                    // marginTop: "1rem",

                    // marginBottom: "auto",
                    objectFit: "cover",
                    objectPosition: "80% 40%",
                  }}
                  src={profilePic}
                ></img>
              </Box>

              <Box
                flexGrow="0"
                // height="calc(100vh - 12rem)"
                // height="calc(100vh - 10rem)"
                // height={`calc(${contentHeight} - 7rem)`}
                // marginTop="1rem"
                width={`calc(100vw - 2*${globalPadding})`}
                // width="100vw"
                // backgroundColor="rgb(18 24 27 / var(--tw-bg-opacity))"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-around"
                // padding-left="rem"

                // sx={{
                //   backgroundColor: "red",
                // }}
              >
                <Box>
                  <Typography
                    // variant="h4"
                    // align="center"
                    fontSize={
                      isMobileExtraSmall
                        ? "1.1rem"
                        : isMobileSmall
                        ? "1.4rem"
                        : "1.5rem"
                    }
                    color="white"
                    // maxWidth="60rem"
                    // textAlign="center"
                    // width="clamp(45ch, 50%, 75ch)"
                  >
                    I'm a web developer based in the UK! Eager to bring creative
                    ideas to life. Seeking an opportunity to grow and make a
                    meaningful impact to a business with a supportive and
                    collaborative team.
                  </Typography>
                  {/* <Typography
                    // variant="h4"
                    // align="center"
                    fontSize={
                      isMobileExtraSmall
                        ? "1.1rem"
                        : isMobileSmall
                        ? "1.4rem"
                        : "1.5rem"
                    }
                    color="white"
                    // maxWidth="60rem"
                    // width="clamp(45ch, 50%, 75ch)"
                  >
                    {" "}
                    With a{" "}
                    <Typography
                      // variant="h4"

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
                    to learn and a fresh perspective, I specialize in and
                    functional websites. Let's collaborate and create something
                    amazing together!
                  </Typography> */}
                </Box>

                {/* <button
              style={{
                borderStyle: "none",
                borderRight: "8px solid black",
                borderBottom: "10px solid black",
                borderBottomColor: "#F38911",
                borderRightColor: "#F38911",
                backgroundColor: "#EF4444",
                // borderRight: "0.5rem solid #F38911",

                fontSize: "2rem",
                padding: "0.5rem 0.8rem",
              }}
            >
              TEST
            </button> */}
              </Box>
            </Box>

            <Button
              flexGrow="0"
              variant="contained"
              color="test"
              sx={{
                width: "10rem",
                // marginTop: "2rem",
                height: "2.5rem",
                fontSize: "1.5rem",
              }}
              href="https://cv-hosting-ak773.s3.eu-west-2.amazonaws.com/Aleksas+Kliska+CV.pdf"
              target="_blank"
            >
              View CV
            </Button>

            <Box
              flexGrow="0"
              // alignSelf="flex-end"
              // marginTop="auto"
              height="6rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              gap="1rem"
              alignItems="center"
              width={`calc(100vw - 2 * ${globalPadding})`}
            >
              <Typography
                // display="block"
                variant={isMobileSmall ? "h5" : "h4"}
                color="white"
              >
                Reasons to hire
              </Typography>
              <span
                className="bounce"
                // width="2rem"
                style={{
                  margin: "0rem 0rem 0rem 0",
                  fontSize: `${isMobileSmall ? "2rem" : "2rem"}`,
                }}
              >
                👇
              </span>
            </Box>
          </Box>
        )}

        {/* {!isSmaller && (
          <Button
            variant="contained"
            color="test"
            // mb="3rem"
            sx={{
              // position: "relative",
              // bottom: "7rem",
              width: "10rem",
              // marginBottom: "3rem",

              fontSize: "1.5rem",
            }}
          >
            Resume
          </Button>
        )} */}
        {!isSmaller && (
          <Box
            height={bottomBarHeight}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            gap="2rem"
            alignItems="center"
            width={`calc(100vw - 2 * ${globalPadding})`}
          >
            <Typography
              display="block"
              variant={isMobileSmall ? "h5" : "h3"}
              color="white"
            >
              Reasons to hire
            </Typography>
            <span
              className="bounce"
              // width="2rem"
              style={{
                margin: "0rem 0rem 0rem 0",
                fontSize: `${isMobileSmall ? "1.8rem" : "3rem"}`,
              }}
            >
              👇
            </span>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
