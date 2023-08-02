import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

let ContactForm = () => {
  let { palette } = useTheme();
  let isMediumQuerry = useMediaQuery("(max-width:1250px)");

  let isMobileSmall = useMediaQuery("(max-width:700px)");
  let isMobile500 = useMediaQuery("(max-width:500px)");
  let [errorState, setErrorState] = useState(false);
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let validateEmail = (email) => {
    const re = new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );
    return re.test(email);
  };

  let handleLeave = () => {
    console.log("the email: ", email);
    console.log("validation result:", validateEmail(email));
    if (!validateEmail(email) && email !== "") {
      setErrorState(true);
      return;
    }
    setErrorState(false);
    // console.log();
  };
  let handleSubmit = async (e) => {
    e.preventDefault();

    let res = await axios.post(
      "https://personal-portfolio-backend-production-7638.up.railway.app/",
      { email, message }
    );

    setMessage("");
    setEmail("");
    console.log("the res: ", res);
    console.log("the email", email);
    console.log("the message", message);
  };
  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box
            display="flex"
            width="100%"
            flexDirection="column"
            gap="2rem"
            justifyContent="center"
            // alignItems="center"
          >
            <Typography
              color="white"
              sx={{
                fontSize: ` ${
                  isMobile500 ? "1rem" : isMediumQuerry ? "1.3rem" : "1.4rem"
                }`,
              }}
            >
              Send me a message directly to my phone via telegram 😱. Provide an
              email so I can message back.
            </Typography>
            <TextField
              multiline
              error={errorState}
              onBlur={handleLeave}
              helperText={
                errorState ? "Incorrect email address provided" : false
              }
              rows="1"
              label="Your email address:"
              id="Contact Form"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                style: { color: "white" },
                "&::placeholder": { color: "white" },
              }}
              sx={{
                width: "100%",
                // backgroundColor: "hsl(218, 12%, 15%)",
                backgroundColor: "",
                "& .MuiFormLabel-root": {
                  color: `${errorState ? palette.error.main : "white"}`,
                },
                "& label.Mui-focused": {
                  color: `${errorState ? palette.error.main : "white"}`,
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: `${palette.custom.yellow}`,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: `${errorState ? palette.error.main : "white"}`,
                  },
                  "&:hover fieldset": {
                    borderColor: `${errorState ? palette.error.main : "white"}`,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: `${palette.custom.yellow}`,
                  },
                },
                //   input: { color: "white" },
              }}
            ></TextField>
            <TextField
              inputProps={{
                style: { color: "white" },
                "&::placeholder": { color: "white" },
              }}
              label="Your message"
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              id="Contact Form"
              sx={{
                width: "100%",

                backgroundColor: "",
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: `${palette.custom.yellow}`,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: `${palette.custom.yellow}`,
                  },
                },
                //   input: { color: "white" },
              }}
            ></TextField>

            <Button
              //   flexGrow="0"
              variant="contained"
              type="submit"
              color="test"
              sx={{
                alignSelf: "end",
                width: "8rem",
                // marginTop: "2rem",
                height: "2.5rem",
                fontSize: "1.5rem",
              }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default ContactForm;
