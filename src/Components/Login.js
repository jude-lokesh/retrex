import * as React from "react";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { IconButton, OutlinedInput } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { MailOutlined, VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";

import Image from '../images/login-top.png';
import Image1 from '../images/login-bottom.png';   
// import bar from '../images/Line.png';  
import KeyIcon from '@mui/icons-material/Key';      

const theme = createTheme();


const styles = {
  paperContainer: {
      // height: 1356,
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "350px 170px"
  }
};
// const bar = {
//   line: {
//       backgroundImage: `url(${bar})`,
  
//   }
// };
const styless = {
  paperContainer: {
      // height: 1356,
      backgroundImage: `url(${Image1})`,
      backgroundRepeat: 'no-repeat',
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "end",
      backgroundColor: "#FAFAFA",
      backgroundPosition: "bottom"
  }
};
// const stylesss = {
//   paperContainer: {
//       // height: 1356,
//       backgroundImage: `url(${Image2})`,
//       backgroundRepeat: 'no-repeat'
//   }
// };

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}
    >
      <Grid
        container
        component="main"
        sx={{ height: "100vh", display: "flex", alignItem: "end"}}
      >
        <CssBaseline />
        {/* -----------------------------Grid-1----------------------------------           */}
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor: "#345B83",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              padding: "0px 40px",
              margin: "37px"
            }}
          >
            <img
              style={{
                width: "290px",
              }}
              src={require("../images/logo.png")}
            />

            <p
              style={{
                fontWeight: "700",
                fontSize: "50px",
                textAlign: "end",
                color: "#FFFFFF",
                fontFamily: "poppins"
              }}
            >
              Powerful, easy-to-use application for real estate trading
            </p>
          </div>
        </Grid>
        {/* ------------------------------Grid-2--------------------------------------------- */}
        <Grid
          item
          xs={5}
          sm={5}
          md={5}
          sx={{
            backgroundColor: "#FAFAFA",
          }}
          style={styles.paperContainer}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "250px 182px",
              gap: "30px"
            }}
          >
            <Box>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontSize: "36px",
                  lineHeight: "54px",
                  color: "#8651D9",
                  fontWeight: "Bold",
                  textAlign: "start",
                    fontFamily:'Poppins',

                }}
              >
                Log into RetreX
              </Typography>
              <p
              style={{
                fontSize:"16px",
                fontWeight:"light",

              }}
              >Enter your login deatails below</p>
            </Box>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}
              >
                <label>
                  <strong>Email Address</strong>
                </label>
                <OutlinedInput
                  style={{
                    weight: "100%",
                  }}
                  id="start-adornment-email"
                  type="email"
                  startAdornment={<MailOutlined
                  style={{
                    borderRight:"1px solid black",
                    paddingRight: "6px"
                  }}/>}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                 gap: "10px"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                  }}
                >
                  <label>
                    <strong>Password</strong>
                  </label>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </div>
                
                <OutlinedInput
                  style={{
                    width: "100%",
                  }}
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  startAdornment={<KeyIcon
                    style={{
                      borderRight:"1px solid black",
                      paddingRight: "6px"
                    }}/>}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="start"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div className="button"
                style={{
                  padding: "1rem",
                  position: "relative",
                  backgroundColor: "#5facdf",
                  backgroundImage:
                    "linear-gradient(43deg, #5facdf 0%, #6668db 46%, #c6a7d5 100%)",
                  padding: "-0.5px",
                  width:"fit-content",
                  marginTop: "30px"
              
                }}
              >
                <button
                  type="submit"
                  style={{
                    width: "fit-content",
                    color: "black",
                    backgroundColor: "#FAFAFA",
                    padding: "10px 50px",
                    fontSize: "16px"
                  }}
                >
                  LOGIN
                </button>
              </div>
            </Box>
          </Box>
        </Grid>
        {/* --------------------------Grid-3------------------------------------------ */}
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          sx={{ padding: "40px 20px" }}
          style={styless.paperContainer}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap:"30px"
              }}
            >
              <p
              style={{
                color:"#8651D9",
                fontSize:"18px"
              }}
              >Don’t have an account?</p>
              <button
                type="submit"
                style={{
                  backgroundColor: "#5facdf",
                  backgroundImage:
                    "linear-gradient(43deg, #5facdf 0%, #6668db 46%, #c6a7d5 100%)",
                  border:"none",
                  padding: "13px 45px",
                  fontSize: "17px",
                  letterSpacing: "2px",
                  fontWeight: "500"
                }}
              >
                SIGN UP
              </button>
            </div>
          </div>
          <div
            style={{
              textAlign: "end",
              width: "fit-content",
            }}
          >
            <img
              sx={{
                width: "292px",
                height: "292px",
              }}
              src={require("../images/ssl.png")}
            />
            <p
            style={{
              fontSize:"12px",
              fontWeight: "300"
            }}
            >Copyright 2020-Retrex pty Ltd.</p>
          </div>
          
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
