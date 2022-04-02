import React from 'react';
import Navigation from './components/Navigation';
import Basket from './components/Basket';
import { useBasketContext } from './store/basket-context';
import Slider from './components/Slider';
import BestSell from './components/BestSell';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
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
