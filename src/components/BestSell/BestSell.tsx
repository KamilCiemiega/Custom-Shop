import React from 'react';
import classes from './BestSell.module.css';
import { SingleElem } from './SingleElem';


const BestSell:React.FC = () => {

    return(
        <div className={classes.wrapper}>
            <div className={classes.wraperText}>
                <h1>HOT PRODUCT</h1>
                <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
                <div className={classes.wrapperLine}></div>
            </div>
            <div className={classes.wrapperElements}>
                <SingleElem 
                price='$98' 
                description='Blue Dress For Woman'
                image = 'https://andshop-vue.netlify.app/_nuxt/img/7.6533a8a.png'
                changeImage = 'https://andshop-vue.netlify.app/_nuxt/img/8.32e12a7.png'
                modalImage = 'https://andshop-vue.netlify.app/_nuxt/img/7.6533a8a.png'
                />
                <SingleElem 
                   price='$48' 
                   description='V-Neck Dress'
                   image = 'https://andshop-vue.netlify.app/_nuxt/img/1.7190443.png'
                   changeImage = 'https://andshop-vue.netlify.app/_nuxt/img/15.45c0fb5.png'
                   modalImage = 'https://andshop-vue.netlify.app/_nuxt/img/1.7190443.png'                 
                />
                <SingleElem 
                   price='$64' 
                   description='Fit-Flare Dress'
                   image = 'https://andshop-vue.netlify.app/_nuxt/img/11.54a1591.png'
                   changeImage = 'https://andshop-vue.netlify.app/_nuxt/img/10.d71c44e.png'
                   modalImage = 'https://andshop-vue.netlify.app/_nuxt/img/11.54a1591.png'
                />
            </div>
        </div>
    );
};

export default BestSell;