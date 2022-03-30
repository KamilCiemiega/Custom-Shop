import React,{ useState } from 'react';
import classes from './BestSell.module.css';
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlinePageview } from "react-icons/md"


const heartStyle = {width:'20px', height:'20px'};
const viewStyle = {width:'20px', height:'20px'};

const BestSell = () => {

    const [showDress,setShowDress] = useState<boolean>(false)
    const [showtshirt,setShowtshirt] = useState<boolean>(false)
    const [showFit,setShowFit] = useState<boolean>(false)

    return(
        <div className={classes.wrapper}>
            <div className={classes.wraperText}>
                <h1>HOT PRODUCT</h1>
                <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
                <div className={classes.wrapperLine}></div>
            </div>
            <div className={classes.wrapperElements}>
                <div 
                className={classes.wrapperElementsItem}
                onMouseEnter={() => setShowDress(true)}
                onMouseLeave={() => setShowDress(false)}>
                    <div className={showDress ? classes.wrapperElementsItemImage : classes.wrapperElementsItemImageActive}></div>
                    <p>Blue Dress For Woman</p>
                    <p>$98</p>
                    <div className={classes.hot}>
                        <span>Hot</span>
                    </div>
                    {showDress &&
                    <div>
                    <div className={classes.wrapperElementsItemWishBlock}>
                    <button className={classes.whishListButton}>
                        <AiOutlineHeart style={heartStyle}/>
                    </button>
                        <button className={classes.viewButton}>
                        <MdOutlinePageview style={viewStyle}/>
                    </button>
                    </div>
                    <button className={classes.addToCard}>Add To Card</button>
                    </div>
                    }
                </div>

            <div 
                className={classes.wrapperElementsItem}
                onMouseEnter={() => setShowtshirt(true)}
                onMouseLeave={() => setShowtshirt(false)}>
                    <div className={showtshirt ? classes.wrapperElementsItemImage2 : classes.wrapperElementsItemImageActive2}></div>
                    <p>V-Neck Dress</p>
                    <p>$48</p>
                    <div className={classes.new}>
                        <span>New</span>
                    </div>
                    {showtshirt &&
                    <div>
                    <div className={classes.wrapperElementsItemWishBlock}>
                    <button className={classes.whishListButton}>
                        <AiOutlineHeart style={heartStyle}/>
                    </button>
                        <button className={classes.viewButton}>
                        <MdOutlinePageview style={viewStyle}/>
                    </button>
                    </div>
                    <button className={classes.addToCard}>Add To Card</button>
                    </div>
                    }
                </div>

                <div 
                className={classes.wrapperElementsItem}
                onMouseEnter={() => setShowFit(true)}
                onMouseLeave={() => setShowFit(false)}>
                    <div className={showFit ? classes.wrapperElementsItemImage3 : classes.wrapperElementsItemImageActive3}></div>
                    <p>Fit-Flare Dress</p>
                    <p>$64</p>
                    {showFit &&
                    <div>
                    <div className={classes.wrapperElementsItemWishBlock}>
                    <button className={classes.whishListButton}>
                        <AiOutlineHeart style={heartStyle}/>
                    </button>
                        <button className={classes.viewButton}>
                        <MdOutlinePageview style={viewStyle}/>
                    </button>
                    </div>
                    <button className={classes.addToCard}>Add To Card</button>
                    </div>
                    }
                </div>
            </div>
            {/* https://preview.themeforest.net/item/andshop-ecommerce-vue-js-template/full_screen_preview/32523571?_ga=2.172952483.106436678.1648617215-484990084.1648113748 */}
        </div>
    );
};

export default BestSell;