import { Box, useTheme } from "@mui/material";
import LineUnder from "../components/LineUnder";

let Navbar = () => {
  let { custom } = useTheme().palette;
  return (
    <>
      <Box
        sx={{
          color: "white",
          fontSize: 40,
          width: "100vw",
          padding: "0 4rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgb(18 24 27 / var(--tw-bg-opacity));",
        }}
      >
        <LineUnder
          color={custom.yellow}
          height="0.5rem"
          text="Aleksas Kliska"
          variant="h4"
          hoverEffect={false}
        ></LineUnder>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <LineUnder
            color={custom.yellow}
            height="0.5rem"
            text="Key Projects"
            variant="h6"
            hoverEffect={true}
          ></LineUnder>
          <LineUnder
            color={custom.yellow}
            height="0.5rem"
            text="Skills"
            variant="h6"
            hoverEffect={true}
          ></LineUnder>
          <LineUnder
            color={custom.yellow}
            height="0.5rem"
            text="Extra Projects"
            variant="h6"
            hoverEffect={true}
          ></LineUnder>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
