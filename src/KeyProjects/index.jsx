import { Typography, Box, Tooltip, useTheme } from "@mui/material";
import sociopedia from "../assets/sociopedia.png";
import Formik from "../assets/tech/formik.svg";
import JWT from "../assets/tech/jwt-3.svg";
import mongoDB from "../assets/tech/mongoDB.svg";
import nodeJS from "../assets/tech/nodeJS.svg";
import ReactIcon from "../assets/tech/React-icon.svg";
import ReduxIcon from "../assets/tech/redux.svg";
// import { v4 as uuidv4, v4 } from "uuid";
import { Language, GitHub } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import LineUnder from "../components/LineUnder";
import odinBattleship from "../assets/odin-battleship.png";
import jestLogo from "../assets/tech/jest-logo.svg";
import webpackLogo from "../assets/tech/webpack-logo.svg";
import javascriptLogo from "../assets/tech/javascript.svg";
import dockerLogo from "../assets/tech/docker.svg";

import telegramBotGif from "../assets/telegram-bot.webp";
import telegramBotGifCompressed from "../assets/telegram-bot-compressed.gif";

let KeyProjects = () => {
  let { custom } = useTheme().palette;
  // let pictures = [Formik, JWT, mongoDB, nodeJS, ReactIcon, ReduxIcon];
  // useEffect(() => {
  //   console.log("this", custom.red);
  // });
  return (
    <div
      className="aPage"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(18 24 27 / 1)",
        gap: "5rem",
        alignItems: "center",
      }}
    >
      <LineUnder
        color={custom.red}
        hoverEffect={false}
        text="Key Project"
        variant="h4"
        height="0.5rem"
        textColor="white"
      ></LineUnder>

      <Box
        width="100%"
        p="2rem 3rem"
        // m="2rem 0rem"
        display="flex"
        flexDirection="column"
        mr="4rem"
        ml="4rem"
        gap="2rem"
        borderRadius="5rem"
        border={`4px solid ${custom.yellow}`}
      >
        <Typography color="white" textAlign="center" variant="h4">
          Social media clone with MERN stack
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          gap="5rem"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip title="Live site" placement="top">
              <a
                href="https://socialize-mern.click/"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton sx={{ color: "white" }}>
                  <Language
                    sx={{ color: "white", fontSize: "3rem" }}
                  ></Language>
                </IconButton>
              </a>
            </Tooltip>
            <Tooltip title="Repository" placement="bottom">
              <a
                href="https://github.com/aleBranching/sociopedia-mern/"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton sx={{ color: "white" }}>
                  <GitHub sx={{ color: "white", fontSize: "3rem" }}></GitHub>
                </IconButton>
              </a>
            </Tooltip>
          </Box>
          <img src={sociopedia} height="350rem" width="700rem"></img>
          <Typography variant="h5" color="white">
            <Box
              display="flex"
              gap="3rem"
              alignItems="center"
              justifyContent="center"
            >
              <Tooltip title="React" placement="top">
                <img width="70px" src={ReactIcon} alt="Formik" />
              </Tooltip>
              <Tooltip title="MongoDB" placement="top">
                <img width="60px" src={mongoDB} alt="Formik" />
              </Tooltip>

              <Tooltip title="nodeJS" placement="top">
                <img width="50px" src={nodeJS} alt="Formik" />
              </Tooltip>

              <Tooltip title="JWT web token" placement="top">
                <img width="50px" src={JWT} alt="Formik" />
              </Tooltip>

              <Tooltip title="Redux" placement="top">
                <img width="50px" src={ReduxIcon} alt="Formik" />
              </Tooltip>

              <Tooltip title="Formik" placement="top">
                <img width="50px" src={Formik} alt="Formik" />
              </Tooltip>
            </Box>
            <ul>
              <li>Backend from scratch with express with MVC pattern</li>
              <li>Protected api routes with JWT web tokens</li>
              <li>MongoDB database with Mongoose as the ODM</li>
              <li>React router for navigation</li>
              <li>Redux with redux persist to keep the state</li>
              <li>
                Authentication built from scratch and login/register form with
                Formik and Yup validation
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>

      <Box
        // width="100%"
        p="2rem 3rem"
        // m="2rem 0rem"
        display="flex"
        flexDirection="column"
        mr="4rem"
        ml="4rem"
        gap="2rem"
        borderRadius="5rem"
        border={`4px solid ${custom.yellow}`}
      >
        <Typography color="white" textAlign="center" variant="h4">
          Battleship game with html, css and javascript
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          gap="5rem"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip title="Live site" placement="top">
              <a
                href="https://alebranching.github.io/odin-battleships/"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton sx={{ color: "white" }}>
                  <Language
                    sx={{ color: "white", fontSize: "3rem" }}
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
                import telegramBotGifCompressed from
                "../assets/telegram-bot-compressed.gif";
                <IconButton sx={{ color: "white" }}>
                  <GitHub sx={{ color: "white", fontSize: "3rem" }}></GitHub>
                </IconButton>
              </a>
            </Tooltip>
          </Box>
          <img src={odinBattleship} height="350rem" width="700rem"></img>
          <Typography variant="h5" color="white">
            <Box
              display="flex"
              gap="3rem"
              alignItems="center"
              justifyContent="center"
            >
              <Tooltip title="Javascript" placement="top">
                <img width="60px" src={javascriptLogo} alt="Javascript logo" />
              </Tooltip>
              <Tooltip title="Jest" placement="top">
                <img width="60px" src={jestLogo} alt="Jest logo" />
              </Tooltip>
              <Tooltip title="Webpack" placement="top">
                <img width="60px" src={webpackLogo} alt="Webpack logo" />
              </Tooltip>
            </Box>
            <ul>
              <li>
                Built to show strong understanding of native DOM manipulation
              </li>
              <li>Practised Test driven development with Jest library</li>
              <li>Used factory functions for seperation of concerns</li>
              <li>UI controller for making changes in the UI</li>
              <li>Webpack to bundle the assets</li>
            </ul>
          </Typography>
        </Box>
      </Box>

      <Box
        // width="100%"
        p="2rem 3rem"
        // m="2rem 0rem"
        display="flex"
        flexDirection="column"
        mr="4rem"
        ml="4rem"
        gap="2rem"
        borderRadius="5rem"
        border={`4px solid ${custom.yellow}`}
      >
        <Typography color="white" textAlign="center" variant="h4">
          Telegram indeed bot
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          gap="5rem"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip title="Repository" placement="bottom">
              <a
                href="https://github.com/aleBranching/odin-battleships/tree/main/"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton sx={{ color: "white" }}>
                  <GitHub sx={{ color: "white", fontSize: "3rem" }}></GitHub>
                </IconButton>
              </a>
            </Tooltip>
          </Box>
          <img src={telegramBotGifCompressed} width="200" height="433"></img>

          <Typography variant="h5" color="white">
            <Box
              display="flex"
              gap="3rem"
              alignItems="center"
              justifyContent="center"
            >
              <Tooltip title="NodeJS" placement="top">
                <img width="60px" src={nodeJS} alt="NodeJSlogo" />
              </Tooltip>

              <Tooltip title="Docker" placement="top">
                <img width="60px" src={dockerLogo} alt="Docker logo" />
              </Tooltip>
            </Box>
            <ul>
              <li>Project for fun</li>
              <li>
                Allows for 3 searches in indeed every 15-30min and send you a
                message about new jobs
              </li>
              <li>Includes dockerfile for easy deployment</li>
              <li>Worked with telegraf library</li>
              <li>More in the README of the repository</li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default KeyProjects;
