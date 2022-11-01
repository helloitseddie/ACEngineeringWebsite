import { createTheme } from "@material-ui/core/styles";

const acBlue = "#005a98";
const acGray = "#707070";

export default createTheme({
  palette: {
    common: {
      blue: `${acBlue}`,
      gray: `${acGray}`,
    },
    primary: {
      main: `${acBlue}`,
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    tab: {
      fontFamily: "Arial",
      textTransform: "none",
      fontSize: "1em",
    },
  },
});
