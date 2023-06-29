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
import { useEffect } from "react";

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
    </div>
  );
};

export default KeyProjects;
