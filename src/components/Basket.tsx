import React from 'react';
import { Wrapper, Right, RightTop, Close, After, Button } from '../styles/Basket.style';

const Basket = () => {
  return (
    <Wrapper>
     <Right>
       <RightTop>
         <p>Shopping Card</p>
         <Close />
       </RightTop>
       <After></After>
       <img src="https://ecommerce-shopmax.netlify.app/static/media/empty-cart.3aa5f09e.png" alt="Girl in a jacket" width="100%"></img>
       <Button>Continue Shopping</Button>
     </Right>
    </Wrapper>
  );
};

export default Basket;
