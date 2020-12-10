import React, { useState } from 'react';
import 'fontsource-roboto';
import { Box, CssBaseline, Link, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LockIcon from '@material-ui/icons/Lock';

const  useStyles = makeStyles(() => ({
  boxOuter: {
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    flexDirection:  "row",
    minHeight:      "100vh"
  },

  boxContainer: {
    //opacity: 0.9,
    padding: "50px",
  },

}))

const lightTheme = createMuiTheme({
      palette: {},
      type: "light",
})

const darkTheme = createMuiTheme({
      palette: {
        background: {
          default: "#000" // BLACK
        },
      type: "dark",
      }
})


function App() {
  const [useDarkTheme, setThemeSelected] = useState(true);
  const classes = useStyles();

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline/>
      <Box className={classes.boxOuter}>
        <Box className={classes.boxContainer}>
            <Typography align="center" variant="h1" >Hi, I'm Chris 👋</Typography>
            <br></br>
            <Box align="center">
              <Link href="https://github.com/charg" color="inherit">
                {/* HACK: Moving the icon up the Y axis to align with the other icons*/}
                <GitHubIcon style={{ transform: 'translateY(-10px)', fontSize: 60 }} />
              </Link>

              <Link href="mailto://grkcharge@gmail.com" color="inherit">
                <EmailIcon style={{ transform: 'translateY(2px)', fontSize: 80, paddingLeft: 10 }} />
              </Link>
              
              <Link href="https://www.linkedin.com/in/chr-a" color="inherit">
                <LinkedInIcon style={{ fontSize: 80, paddingLeft: 10 }} />
              </Link>

              <Link href="chris_argeros.asc" color="inherit">
                <LockIcon style={{ transform: 'translateY(-7px)', fontSize: 80, paddingLeft: 5 }} />
              </Link>
            </Box>
        </Box>
      </Box>

    </ThemeProvider>
  );
}

export default App;