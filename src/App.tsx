import React, { useContext } from 'react';
import GlobalStyle from './Theme/Global.style';
import Navigation from './components/Navigation';
import Basket from './components/Basket';
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme/Theme.style';
import BasketContextProvider from './store/basket-context';
import { BasketContext } from './store/basket-context';


const App: React.FC = () => {
  const basketCtx = useContext(BasketContext);
  return (
    <BasketContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Basket />
    </ThemeProvider>
    </BasketContextProvider>
  );
};

export default App;
