import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box, createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider, ThemeOptions } from "@mui/material/styles";

const theme1: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#007FFF",
      light: "#0DFFF8",
      dark: "#130DFF",
    },
    secondary: {
      main: "#FF19CD",
      dark: "#970DFF",
      light: "#FE6B8B",
    },
    background: {
      paper: "#000000",
      default: "#000000",
    },
  },
  typography: {},
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          boxShadow: " 0px 0px 30px 2px #0080ff99",
          borderBottom: "solid  2px #0579ec",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",

          gradient: "linear-gradient(45deg, #FE6B8B 30%, #007FFF 90%)",
          border: "solid 2px transparent",
          borderImage: "linear-gradient(45deg, #FE6B8B, #007FFF) 1",
        },
      },
    },
  },
};

export const theme2: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#007FFF",
      light: "#0DFFF8",
      dark: "#130DFF",
    },
    secondary: {
      main: "#FF19CD",
      dark: "#970DFF",
      light: "#32FF00",
    },
  },
};

const theme = createTheme(theme1);

export const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Box
          sx={{
            marginTop: "5.4rem",
            maxWidth: "90%",
            marginX: "auto ",
          }}
        >
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
};
