import React, { useContext } from 'react';
import GlobalStyle from './Theme/Global.style';
import Navigation from './components/Navigation';
import Basket from './components/Basket';
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme/Theme.style';
import BasketContextProvider from './store/basket-context';
import { useBasketContext } from './store/basket-context';
import Slider from './components/Slider';

const App: React.FC = () => {
  const basketCtx = useBasketContext();
  console.log("ctx in app",basketCtx)
  return (
    <BasketContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation/>
      <Slider />
      {basketCtx.show ?
      <Basket /> 
      :null
      }
    </ThemeProvider>
    </BasketContextProvider>
  );
};

export default App;
