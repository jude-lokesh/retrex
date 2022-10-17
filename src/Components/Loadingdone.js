import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import './Loadingdone.css';

import "./Loadingdone.css";

const theme = createTheme();


export default function Loadingdone() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" 
      sx={{
        marginTop: "236px",
        display: "flex",
        alignItem: "center",
        flexDirection: "column",
        textAlign: "center",
        fontFamily: "poppins",

        }}>



        <h2
            style={{
                color: "#8651D9",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "48px",
                margin: "auto"
            }}
        >
            Welcome back, Kiel
            </h2>

        <h3
            style={{
                color: "#8651D9",
                fontWeight: "300",
                fontSize: "48px"
            }}
        >
            We are preparing your workspace
            </h3>
        
        <img class="image"
        style={{
            margin:"auto"
        }}
        src={require("../images/loading.png")} />
        
 
        <p
          style={{
            fontSize: "24px",
            lineHeight: "36px"
          }}
        >Almost done</p>


      </Container>
    </ThemeProvider>
  );
}
