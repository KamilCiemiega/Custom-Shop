import React from 'react';
import classes from './BestSell.module.css';
const BestSell = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.wraperText}>
                <h1>Best Selling Product</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>  
            </div>
            <div className={classes.wrapperElem}>
                <div>
                    <div className={classes.image}></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSell;