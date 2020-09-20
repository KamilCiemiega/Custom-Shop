import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../Theme/GlobalStyle'
import HomeMain from './HomeMain';
import { ThemeProvider } from 'styled-components';
import Theme from '../../Theme/MainTheme';
import HomeAdd from './HomeAdd';

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const Home = props => {
    return (
        <HomeWrapper>
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <HomeMain />
                <HomeAdd />
            </ThemeProvider>
        </HomeWrapper>
    )
}

export default Home