import React, { useContext } from 'react';
import Navigation from './components/Navigation';
import Basket from './components/Basket';
import BasketContextProvider from './store/basket-context';
import { useBasketContext } from './store/basket-context';
import Slider from './components/Slider';
import BestSell from './components/BestSell';

const App: React.FC = () => {
  const basketCtx = useBasketContext();

  return (
    <BasketContextProvider>
      <Navigation/>
      <Slider />
      {/* <Basket />  */}
      <BestSell />
    </BasketContextProvider>
  );
};

export default App;
