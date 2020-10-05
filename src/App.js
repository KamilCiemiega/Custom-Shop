import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Theme/GlobalStyle'
import HomeMain from './components/Home/HomeMain';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme/MainTheme';
import HomeAdd from './components/Home/HomeAdd';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: black;
`

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <HomeMain />
        <HomeAdd />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
