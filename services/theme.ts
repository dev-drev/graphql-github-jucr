import { createTheme } from "@mui/material";

const fontFamily = {
  regular: "'Noto Sans', sans-serif",
  condensed: "'Noto Sans', sans-serif",
  extended: "'Noto Sans', sans-serif",
};

const theme = createTheme({
  palette: {
    mode: "dark",

    // primary colors include the following:
    primary: {
      main: "#333A42",
      light: "#5195EF",
      contrastText: "#283548",
    },
    // secondary colors include the following:
    secondary: {
      main: "#BFA181",
      light: "#f0c9a1",
    },
    // grey colors include the following:
    grey: {
      black: "#080808",
      grey90: "#292929",
      grey80: "#525252",
      grey: "#999999",
      white: "#fafafa",
      white80: "#e0e0e0",
      white90: "#eeeeee",
    },
  },

  typography: {
    fontFamily: fontFamily.regular,

    // H1
    h1: {
      fontFamily: fontFamily.extended,
      fontWeight: 900,
      fontSize: "56px",
      lineHeight: "1.5px",
      letterSpacing: "-1.5px",
    },
    // Headline
    h2: {
      fontFamily: fontFamily.extended,
      fontWeight: 900,
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    // Sub Headline
    h3: {
      fontFamily: fontFamily.extended,
      fontWeight: 900,
      fontSize: "24px",
      lineHeight: 1.27,
      letterSpacing: "0.0125rem",
    },
    // Menu Bold
    h4: {
      fontFamily: fontFamily.regular,
      fontSize: "1.125rem",
      fontWeight: 900,
      lineHeight: 1.22,
      letterSpacing: "normal",
    },
    // Menu
    h5: {
      fontFamily: fontFamily.regular,
      fontSize: "1.125rem",
      lineHeight: 1.22,
      letterSpacing: "normal",
    },
    // Category
    h6: {
      fontFamily: fontFamily.regular,
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: "0.03125rem",
      textTransform: "uppercase",
    },

    body1: {
      fontFamily: fontFamily.regular,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.03125rem",
    },
    // body2 class is used for bold body1 text // body/bold on zeplin
    body2: {
      fontFamily: fontFamily.regular,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },

    button: {
      fontFamily: fontFamily.regular,
      fontSize: "0.8125rem",
      lineHeight: 1.31,
      padding: "0 18px",
      letterSpacing: "0.3px",
      fontWeight: 600,
      color: "#efefef",
      borderRadius: "100px",
    },

    caption: {
      fontFamily: fontFamily.regular,
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "normal",
    },

    subtitle1: {
      fontFamily: fontFamily.regular,
      fontSize: 24,
      fontWeight: 300,
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
  },
  shape: {
    borderRadius: 1,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1600,
    },
  },

  // Component styles overrides
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     "@font-face": [drukWide],
    //   },
    // },
  },

  // TODO: investicate why the overrides breaks the 'darken' mode
  // ...overrides,
});

export default theme;
