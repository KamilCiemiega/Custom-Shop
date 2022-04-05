import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Basket from './components/Basket/Basket';
import { useBasketContext } from './store/basket-context';
import Slider from './components/Slider/Slider';
import BestSell from './components/BestSell/BestSell';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/scrollToTop';

const App: React.FC = () => {
  const basketCtx = useBasketContext();

  return (
    <>
      <Navigation/>
      <Slider />
      {basketCtx.show && <Basket />}
      <BestSell />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
