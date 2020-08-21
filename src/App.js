import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { ChildView } from "./Pages";
import chaloopsMedium from './font/9719beab12b9e44b85432bb843ad1d55.ttf';
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from './Components/Layout'

const App = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @font-face {
          font-family: 'Chaloops W00 Reg';
          font-style: normal;
          font-weight: 500;
          src: url('./${chaloopsMedium}');
        }`}
        }
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <ChildView />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
