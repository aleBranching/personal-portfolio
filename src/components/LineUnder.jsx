import { Box, Typography } from "@mui/material";

let LineUnder = ({
  variant,
  height,
  color,
  text,
  hoverEffect,
  textColor,
  style,
  scrollFunction,
  cursor,
}) => {
  if (!hoverEffect) {
    let handleClick = () => {
      console.log("AAAAA");
    };
    return (
      <>
        <Box position="relative" onClick={scrollFunction} sx={{ ...style }}>
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
                cursor: cursor && "pointer",
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
      <Box
        position="relative"
        onClick={scrollFunction}
        sx={{ cursor: cursor && "pointer" }}
      >
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
