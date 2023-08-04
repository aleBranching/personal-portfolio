// import { useTheme } from "@emotion/react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Container,
} from "@mui/material";
// import { DEFAULT_ATTRIBUTE } from "@mui/system/cssVars/getInitColorSchemeScript";
import { forwardRef, useEffect } from "react";
import LineUnder from "../components/LineUnder";
import ContactForm from "./ContactForm";
import { Language, GitHub, Email } from "@mui/icons-material";

let AboutMe = forwardRef(({ contactMeRef }, ref) => {
  let { palette } = useTheme();

  let isMediumQuerry = useMediaQuery("(max-width:1250px)");
  // let isMediumQuerry = useMediaQuery("(max-width:1250px)");

  let isMobileSmall = useMediaQuery("(max-width:700px)");
  let isMobile500 = useMediaQuery("(max-width:500px)");

  let isMobileExtraSmall = useMediaQuery("(max-width:385px)");

  let isMobileMedium = !isMobileSmall && isMediumQuerry;
  let isSmaller = isMediumQuerry;

  useEffect(() => {
    console.log("the palette", palette);
    console.log("is mobile small", isMobileSmall);
  });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop="2rem"
      flexDirection="column"
    >
      <LineUnder
        hoverEffect={false}
        text="About Me"
        variant={isMobileSmall ? "h4" : "h3"}
        height="0.5rem"
        textColor={"white"}
        color={palette.custom.red}
        style={{ marginBottom: "4rem" }}
      ></LineUnder>
      <Container>
        <Typography
          sx={{
            fontSize: ` ${
              isMobile500 ? "1rem" : isMediumQuerry ? "1.3rem" : "1.4rem"
            }`,
          }}
          color="white"
        >
          After sucesfully completing undergraduate Computer Science at
          University of York I've been learning about web development while
          having a part time job.
        </Typography>

        <Typography
          paddingTop="1rem"
          sx={{
            fontSize: ` ${
              isMobile500 ? "1rem" : isMediumQuerry ? "1.3rem" : "1.4rem"
            }`,
          }}
          color="white"
        >
          Following The Odin Project has significantly fortified my web
          development fundamentals. Starting from the ground up with simple HTML
          and CSS websites, I've steadily grown into a React developer with a
          solid grasp of the inner workings. This hands-on approach, focused on
          projects, allowed me to apply my learning effectively. Additionally,
          delving into the MDN learning guide has provided me with a strong
          foundation in HTML, CSS, and Javascript.
        </Typography>
        <Typography
          paddingTop="1rem"
          sx={{
            fontSize: ` ${
              isMobile500 ? "1rem" : isMediumQuerry ? "1.3rem" : "1.4rem"
            }`,
          }}
          color="white"
        >
          I am consistently advancing as a developer, utilizing Linux with i3wm
          (a tiling window manager) on a daily basis. My proficiency extends to
          becoming adept with vim, further enhancing my skill set.
        </Typography>
        <Typography
          paddingTop="1rem"
          sx={{
            fontSize: ` ${
              isMobile500 ? "1rem" : isMediumQuerry ? "1.3rem" : "1.4rem"
            }`,
          }}
          color="white"
        >
          My next focus is on crafting a web app catering to multilingual
          readers. This platform aims to provide real-time translations of
          specific words upon touch, allowing users to catalog these into a
          structured flashcard system.
        </Typography>
      </Container>
      <LineUnder
        // marginTop="4rem"
        hoverEffect={false}
        text="Contact Me"
        variant={isMobileSmall ? "h4" : "h3"}
        height="0.5rem"
        textColor={"white"}
        color={palette.custom.red}
        style={{ margin: "4rem 0 4rem 0" }}
      ></LineUnder>
      <div ref={ref}>
        <ContactForm></ContactForm>
      </div>
      <Typography sx={{ color: "white", marginTop: "2rem" }} variant="h4">
        Or
      </Typography>
      <Box
        paddingTop="3rem"
        paddingBottom="3rem"
        display="flex"
        width="100%"
        // flexDirection="row"
        flexDirection={isMobileSmall ? "column" : "row"}
        justifyContent="space-around"
        gap="2rem"
      >
        {/* <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          sx={{ cursor: "pointer" }}
        >
          <GitHub
            sx={{
              color: "white",
              fontSize: `${isMobileSmall ? "2rem" : "3rem"}`,
            }}
          ></GitHub>
          <Typography variant="h5" sx={{ color: "white" }}>
            aleBranching
          </Typography>
        </Box> */}
        <Box
          display="flex"
          // flexDirection={isMobileSmall ? "row" : "column"}
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          // sx={{ cursor: "pointer" }}
        >
          <Email
            sx={{
              color: "white",
              fontSize: `${isMobileSmall ? "2rem" : "3rem"}`,
            }}
          ></Email>
          <Typography
            // variant={isMobileSmall ? "" : "h5"}
            sx={{
              color: "white",
              fontSize: ` ${
                isMobile500 ? "1rem" : isMediumQuerry ? "1.3rem" : "1.4rem"
              }`,
            }}
          >
            aleksask789@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
});

export default AboutMe;
