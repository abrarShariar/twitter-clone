import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes';

export const GlobalStyles = createGlobalStyle`
* {
  outline: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html,
body,
#root {
  height: 100%;
}

body {
  background: #fff;
}
`;

function App() {
    return (
      <div>
        <GlobalStyles />
        <Routes />
      </div>
    );
}

export default App;