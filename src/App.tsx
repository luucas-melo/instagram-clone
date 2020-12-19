import React from "react";
import "./App.css";
import Route from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./theme/light";
import GlobalStyle from './global';
function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Route />
    </ThemeProvider>
  );
}

export default App;
