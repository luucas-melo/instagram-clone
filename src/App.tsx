import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import light from './theme/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
