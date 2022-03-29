import React from 'react';
import classes from './Basket.module.css';
import { AiOutlineClose } from 'react-icons/ai';

const Basket = () => {
  const closeIcon = {marginRight: '5%', height: '25px',width: '25px',cursor:'pointer'}

  return (
    <div className={classes.wrapper}>
     <div className={classes.right}>
       <div className={classes.rightTop}>
         <p>Shopping Card</p>
         <AiOutlineClose style={closeIcon} />
       </div>
       <div className={classes.after}></div>
       <img src="https://ecommerce-shopmax.netlify.app/static/media/empty-cart.3aa5f09e.png" alt="Girl in a jacket" width="100%"></img>
       <button>Continue Shopping</button>
     </div>
    </div>
  );
};

export default Basket;
