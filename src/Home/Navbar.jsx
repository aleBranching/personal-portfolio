import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import LineUnder from "../components/LineUnder";

let Navbar = ({ scrollToProjects, scrollToAboutMe, scrollToContactMe }) => {
  let { custom } = useTheme().palette;
  let { sizing } = useTheme();
  let isMediumQuerry = useMediaQuery("(max-width:1250px)");

  let isMobileSmall = useMediaQuery("(max-width:700px)");
  let isMobileMedium = !isMobileSmall && isMediumQuerry;
  let isSmaller = isMediumQuerry;
  let smallerSize = "h6";

  useEffect(() => {
    // console.log(`calc(100vw - ${sizing.globalPadding})`);
  });
  return (
    <>
      <Box
        sx={{
          color: "white",
          fontSize: 40,
          width: `calc(100vw - 2*${sizing.globalPadding})`,
          // width: `calc(100vw - 10rem)`,
          // width: `calc(100vw - 10rem)`,
          // width: `calc(100vw)`,
          // padding: "0 4rem",
          height: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgb(18 24 27 / var(--tw-bg-opacity));",
        }}
      >
        <LineUnder
          color={custom.yellow}
          height={!isSmaller ? "0.5rem" : "0.4rem"}
          text="Aleksas Kliska"
          variant={!isSmaller ? "h4" : "h5"}
          hoverEffect={false}
        ></LineUnder>
        {!isMobileSmall && (
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <LineUnder
              cursor={true}
              color={custom.yellow}
              height="0.5rem"
              text="Key Projects"
              scrollFunction={scrollToProjects}
              variant={isMobileSmall ? "body1" : "h6"}
              hoverEffect={true}
            ></LineUnder>
            <LineUnder
              cursor={true}
              color={custom.yellow}
              height="0.5rem"
              text="About Me"
              variant="h6"
              scrollFunction={scrollToAboutMe}
              hoverEffect={true}
            ></LineUnder>
            <LineUnder
              cursor={true}
              color={custom.yellow}
              height="0.5rem"
              text="Contact Me"
              scrollFunction={scrollToContactMe}
              variant="h6"
              hoverEffect={true}
            ></LineUnder>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Navbar;
