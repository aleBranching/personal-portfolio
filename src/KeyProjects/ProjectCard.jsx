import { IconButton, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/system";
import { Language, GitHub } from "@mui/icons-material";

import {
  ProjectDetailBoxLeft,
  ProjectDetailBoxRight,
} from "../components/ProjectDetailBox";
import odinBattleship from "../assets/odin-battleship.png";

let ProjectCard = ({ title, image, devIcons, repoURL, siteURL, children }) => {
  let isMediumQuerry = useMediaQuery("(max-width:1250px)");

  let isMobileSmall = useMediaQuery("(max-width:700px)");
  let isMobile500 = useMediaQuery("(max-width:500px)");
  // let devIconStyling = {font-size : 3.3rem}

  let isMobileExtraSmall = useMediaQuery("(max-width:385px)");

  let isMobileMedium = !isMobileSmall && isMediumQuerry;
  let isSmaller = isMediumQuerry;
  let imageWidth = 35;
  return (
    <Box
      display="flex"
      marginTop="3rem"
      flexDirection={isMediumQuerry ? "column" : "row"}
      sx={{ background: "inherit" }}
    >
      <ProjectDetailBoxLeft
        padding="1rem"
        // width="40vw"
        border="2px"
        display="flex"
        flexDirection="column"
        width={isMobile500 ? "90vw" : isMediumQuerry ? "70vw" : "40vw"}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography
            color="white"
            variant={isMobile500 ? "h6" : isMediumQuerry ? "h5" : "h4"}
            width="60%"
          >
            {title}
          </Typography>
          {siteURL && (
            <Tooltip title="Live site" placement="top">
              <a href={siteURL} rel="noreferrer" target="_blank">
                <IconButton sx={{ color: "white" }}>
                  <Language
                    sx={{
                      color: "white",
                      fontSize: `${isMobileSmall ? "2rem" : "3rem"}`,
                    }}
                  ></Language>
                </IconButton>
              </a>
            </Tooltip>
          )}
          <Tooltip title="Repository" placement="top">
            <a href={repoURL} rel="noreferrer" target="_blank">
              <IconButton sx={{ color: "white" }}>
                <GitHub
                  sx={{
                    color: "white",
                    fontSize: `${isMobileSmall ? "2rem" : "3rem"}`,
                  }}
                ></GitHub>
              </IconButton>
            </a>
          </Tooltip>
        </Box>
        <Box color="white">
          <ul
            style={{
              paddingLeft: "1rem",
              fontSize: ` ${
                isMobile500 ? "1rem" : isMediumQuerry ? "1.3rem" : "1.4rem"
              }`,
            }}
          >
            {children}
          </ul>
        </Box>
      </ProjectDetailBoxLeft>
      <Box
        sx={{
          display: "flex",
          //   height: "5rem",
          //   width: "10rem",
          border: `3px solid #cc9c08`,
          borderLeft: isMediumQuerry ? "3px solid #cc9c08" : "none",
          borderTop: isMediumQuerry ? "none" : "3px solid #cc9c08",
          // position: "absolue",
          // zIndex: "1",
          //   backgroundColor: "#21282b",

          transform: isMediumQuerry
            ? "translate(0, -0.5rem)"
            : "translate(-0.5rem, 0)",
          //   paddingLeft: "0.4rem",
          borderRadius: isMediumQuerry
            ? "0px 0px 4px 4px;"
            : "0px 4px 4px 0px;",
        }}
        padding="1.4rem 1rem 0rem 1rem"
        // height="100%"
        // paddingLeft="2rem"
        // width="42vw"
        // width={isMediumQuerry ? "70vw" : "42vw"}
        width={isMobile500 ? "90vw" : isMediumQuerry ? "70vw" : "42vw"}
        // display="flex"
        flexDirection="column"
        justifyContent="space-between"
        // justifyContent="space-between"

        alignItems="center"
        border="2px"
      >
        <Box flexGrow="1" display="flex" alignItems="center">
          <img
            // width={`${imageWidth}vw`}
            // width="50vw"
            style={{
              // width: `${imageWidth}vw`,
              width: `100%`,
              // height: `${imageWidth / 2.037}vw`,
            }}
            // height={`${imageWidth / 2.037}vw`}
            src={image}
          ></img>
        </Box>

        <Box
          // paddingLeft="0.5rem"
          display="flex"
          paddingTop="0.5rem"
          paddingBottom="0.5rem"
          // flexGrow="1"
          alignSelf="flex-end"
          // height={`${imageWidth / 2.037}vw`}
          // height="100%"
          flexDirection="row"
          // paddingBottom="1rem"
          // height="120%"
          // alignItems="center"
          width="100%"
          justifyContent="space-around"
        >
          {devIcons.map((anElement) => (
            <i key={uuidv4()} className={`${anElement} devicon`}></i>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
