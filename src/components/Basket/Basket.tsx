import React from 'react';
import classes from './Basket.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useBasketContext } from '../../store/basket-context';


const Basket = () => {
  const closeIcon = {marginRight: '5%', height: '25px',width: '25px',cursor:'pointer'}
  const basketCtx = useBasketContext();

  return (
    <div className={classes.wrapper}>
     <div className={classes.right}>
       <div className={classes.rightTop}>
         <p>Shopping Card</p>
         <AiOutlineClose style={closeIcon} onClick={basketCtx.changeVisibility}/>
       </div>
       <div className={classes.after}></div>
       <img src="https://ecommerce-shopmax.netlify.app/static/media/empty-cart.3aa5f09e.png" alt="Girl in a jacket"></img>
       <button>Continue Shopping</button>
     </div>
    </div>
  );
};

export default Basket;
