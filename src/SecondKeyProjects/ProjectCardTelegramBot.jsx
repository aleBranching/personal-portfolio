import { IconButton, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Language, GitHub } from "@mui/icons-material";

import {
  ProjectDetailBoxLeft,
  ProjectDetailBoxRight,
} from "../components/ProjectDetailBox";
import odinBattleship from "../assets/odin-battleship.png";
import telegramBotGifCompressed from "../assets/telegram-bot-compressed.gif";

let ProjectCardTelegramBot = () => {
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
    >
      <ProjectDetailBoxLeft
        padding="1rem"
        // width="40vw"
        border="6px"
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
            Telegram indeed update bot
          </Typography>
          <Tooltip title="Live site" placement="top">
            <a
              href="https://alebranching.github.io/odin-battleships/"
              rel="noreferrer"
              target="_blank"
            >
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
          <Tooltip title="Repository" placement="bottom">
            <a
              href="https://github.com/aleBranching/odin-battleships/tree/main/"
              rel="noreferrer"
              target="_blank"
            >
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
            <li>Project for fun</li>
            <li>
              Allows for 3 searches in indeed every 15-30min and send you a
              message about new jobs
            </li>
            <li>Includes dockerfile for easy deployment</li>
            <li>Worked with telegraf library</li>
            <li>More in the README of the repository</li>
          </ul>
        </Box>
      </ProjectDetailBoxLeft>
      <Box
        sx={{
          display: "flex",
          //   height: "5rem",
          //   width: "10rem",
          border: `2px solid #cc9c08`,
          borderLeft: isMediumQuerry ? "2px solid #cc9c08" : "none",
          borderTop: isMediumQuerry ? "none" : "2px solid #cc9c08",
          transform: isMediumQuerry
            ? "translate(0, -0.4rem)"
            : "translate(-0.4rem, 0)",
          //   paddingLeft: "0.4rem",
          borderRadius: "4px",
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
            src={telegramBotGifCompressed}
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
          <i className="devicon-nodejs-plain devicon"></i>
          <i className="devicon-docker-plain-wordmark devicon"></i>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCardTelegramBot;
