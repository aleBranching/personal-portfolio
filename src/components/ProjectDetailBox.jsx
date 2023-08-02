import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";

// let { red, yellow } = useTheme().palette.custom;

const ProjectDetailBoxLeft = styled(Box)(({ border, theme }) => ({
  display: "flex",
  //   height: "5rem",
  //   width: "10rem",
  //   padding: "2rem",
  // backgroundColor: "hsl(218, 12%, 15%)",
  position: "absolue",
  zIndex: "2",
  border: `${border} solid ${theme.palette.custom.yellow}`,
  boxShadow:
    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  borderRadius: "6px",
}));

const ProjectDetailBoxRight = styled(Box)(({ border }) => ({
  display: "flex",
  //   height: "5rem",
  //   width: "10rem",
  border: `${border} solid #cc9c08`,
  backgroundColor: "#21282b",

  borderLeft: "none",
  transform: "translate(-0.4rem, 0)",
  //   paddingLeft: "0.4rem",
  borderRadius: "6px",
}));

export { ProjectDetailBoxLeft, ProjectDetailBoxRight };
