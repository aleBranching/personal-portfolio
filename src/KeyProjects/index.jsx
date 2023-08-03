import {
  Typography,
  useTheme,
  Box,
  useMediaQuery,
  Container,
} from "@mui/material";
import { useEffect } from "react";
import LineUnder from "../components/LineUnder";
import ProjectCard from "./ProjectCard";

import odinBattleship from "../assets/odin-battleship.png";
import telegramBotGifCompressed from "../assets/telegram-bot-compressed.gif";

import sociopedia from "../assets/sociopedia.png";

const KeyProjects = () => {
  let { red, yellow } = useTheme().palette.custom;
  let isMobileSmall = useMediaQuery("(max-width:700px)");

  useEffect(() => {
    console.log(red);
  });
  return (
    <Container background="inherit" sx={{ background: "inherit" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ background: "inherit" }}
        //   backgroundColor="rgb(18 24 27 )"
      >
        {/* <Typography color="white" variant="h3"> */}
        <LineUnder
          hoverEffect={false}
          text="Key Projects"
          variant={isMobileSmall ? "h4" : "h3"}
          height="0.5rem"
          textColor={"white"}
          color={red}
          style={{ marginBottom: "2rem" }}
        ></LineUnder>

        <ProjectCard
          title={"Fullstack social media application"}
          devIcons={[
            "devicon-react-original-wordmark",
            "devicon-mongodb-plain-wordmark",
            "devicon-nodejs-plain-wordmark",
            "devicon-express-original-wordmark",
          ]}
          image={sociopedia}
          siteURL={"https://socialize-mern.click"}
          repoURL={"https://github.com/aleBranching/sociopedia-mern"}
        >
          <li>Authentication with JWT tokens stored in Local State</li>
          <li>Mongoose as the ORM</li>
          <li>Protected api routes</li>
          <li>MUI to get experience in using styled components</li>
          <li>NodeJS Backend seperated into models, routes, controllers</li>
          <li>Redux for state managment with redux persist</li>
          <li>Forms with Formik and Yup</li>
        </ProjectCard>

        <ProjectCard
          title={"Battleship game with html, css and javascript"}
          devIcons={[
            "devicon-html5-plain-wordmark",
            "devicon-css3-plain-wordmark",
            "devicon-javascript-plain",
            "devicon-webpack-plain-wordmark",
            "devicon-jest-plain",
          ]}
          image={odinBattleship}
          siteURL={"https://alebranching.github.io/odin-battleships/"}
          repoURL={
            "https://github.com/aleBranching/odin-battleships/tree/main/"
          }
        >
          <li>Built to show strong understanding of native DOM manipulation</li>
          <li>Practised Test driven development with Jest library</li>
          <li>Used factory functions for seperation of concerns</li>
          <li>UI controller for making changes in the UI</li>
          <li>Webpack to bundle the assets</li>
        </ProjectCard>

        <ProjectCard
          title={"Telegram indeed update bot"}
          devIcons={["devicon-nodejs-plain", "devicon-docker-plain-wordmark"]}
          image={telegramBotGifCompressed}
          // siteURL={"https://alebranching.github.io/odin-battleships/"}
          repoURL={"https://github.com/aleBranching/telegram-indeed-bot/"}
        >
          <li>Project for fun</li>
          <li>
            Allows for 3 searches in indeed every 15-30min and send you a
            message about new jobs
          </li>
          <li>Includes dockerfile for easy deployment</li>
          <li>Worked with telegraf library</li>
          <li>More in the README of the repository</li>
        </ProjectCard>

        {/* <ProjectCardMern></ProjectCardMern> */}
        {/* <ProjectCardBattleship></ProjectCardBattleship> */}
        {/* <ProjectCardTelegramBot></ProjectCardTelegramBot> */}

        {/* <div>teat</div> */}
      </Box>
    </Container>
  );
};

export default KeyProjects;
