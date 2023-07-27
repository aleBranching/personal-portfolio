import { Box, Typography } from "@mui/material";

let LineUnder = ({
  variant,
  height,
  color,
  text,
  hoverEffect,
  textColor,
  style,
}) => {
  if (!hoverEffect) {
    return (
      <>
        <Box position="relative" sx={...style}>
          <Typography
            variant={variant}
            color={textColor && textColor}
            sx={{
              "&::after": {
                display: "block",
                // bottom: "0",
                position: "absolute",
                content: `""`,
                backgroundColor: color,
                width: "100%",
                height: height,
              },
            }}
          >
            {text}
          </Typography>
        </Box>
      </>
    );
  }
  return (
    <>
      <Box position="relative">
        <Typography
          variant={variant}
          sx={{
            "&::after": {
              display: "block",
              // bottom: "0",
              position: "absolute",
              content: `""`,
              backgroundColor: color,
              width: "0",
              height: height,
              transition: "width 0.2s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default LineUnder;
