import React from "react";
import "./App.css";
import Route from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./theme/light";
import dark from "./theme/dark";
import GlobalStyle from "./global";
import { StoreState } from "./store/store";
import { useSelector } from 'react-redux';
function App() {
  const { title } = useSelector((state: StoreState) => state.theme);
  return (
    <ThemeProvider theme={title === 'light' ? light : dark}>
      <GlobalStyle />
      <Route />
    </ThemeProvider>
  );
}

export default App;
