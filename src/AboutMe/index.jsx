// import { useTheme } from "@emotion/react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Container,
} from "@mui/material";
// import { DEFAULT_ATTRIBUTE } from "@mui/system/cssVars/getInitColorSchemeScript";
import { useEffect } from "react";
import LineUnder from "../components/LineUnder";
import ContactForm from "./ContactForm";

let AboutMe = () => {
  let { palette } = useTheme();

  let isMediumQuerry = useMediaQuery("(max-width:1250px)");

  let isMobileSmall = useMediaQuery("(max-width:700px)");
  let isMobileExtraSmall = useMediaQuery("(max-width:385px)");

  let isMobileMedium = !isMobileSmall && isMediumQuerry;
  let isSmaller = isMediumQuerry;

  useEffect(() => {
    console.log("the palette", palette);
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
        <Typography variant="h5" color="white">
          Aspiring Junior Web Developer with a passion for coding and a strong
          desire to build a successful career in the tech industry. Proficient
          in HTML, CSS, and JavaScript, with hands-on experience in creating
          responsive and user-friendly websites.
        </Typography>
        <Typography paddingTop="1rem" variant="h5" color="white">
          Eager to learn and adapt to new technologies and frameworks. Highly
          detail-oriented, dedicated, and driven to deliver high-quality
          results. A team player with excellent communication skills, eager to
          contribute to a dynamic and innovative development environment.
          Seeking an opportunity to grow and make a meaningful impact in a
          supportive and collaborative web development team.
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
      <ContactForm></ContactForm>
    </Box>
  );
};

export default AboutMe;
