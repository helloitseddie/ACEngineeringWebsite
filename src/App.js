import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import Header from "./components/header";



import ScrollToTop  from "./components/ScrollToTop";
import AllRoutes from "./AllRoutes";

const App = (props) => {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header container={container} />
        <ScrollToTop />
        <AllRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
