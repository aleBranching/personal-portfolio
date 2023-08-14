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
          After graduating from the University of York with a BEng in Computer
          Science, I have been expanding my skillset to include various
          web-related technologies while holding a part time job.
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
          My self learning has been structured with The Odin Project. This
          allowed for a project based learning where each of the technology or
          concepts that I learned were reinforced with a project built from the
          ground up. It allowed me to grow into a React developer with a solid
          grasp of the fundamentals. This was in addition to covering other
          various resources such as MongoDB University and going through MDN
          learning guide fully.
        </Typography>
        {/* <Typography
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
        </Typography> */}
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
            aleksas.kliska@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
});

export default AboutMe;
