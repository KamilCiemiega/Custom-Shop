import React,{ useState } from 'react';
import classes from './BestSell.module.css';
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlinePageview } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"

const heartStyle = {width:'20px', height:'20px'};
const viewStyle = {width:'20px', height:'20px'};
const closeStyle = {position:'absolute', top:'0', right:'0'}

const BestSell = () => {

    const [showDress,setShowDress] = useState<boolean>(false);
    const [showtshirt,setShowtshirt] = useState<boolean>(false);
    const [showFit,setShowFit] = useState<boolean>(false);
    const [showModalDress, setShowModalDress] = useState<boolean>(false);
    const [showModaltshirt, setShowModaltshirt] = useState<boolean>(false);
    const [showModalFit, setShowModalFit] = useState<boolean>(false);

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
                        <MdOutlinePageview style={viewStyle} onClick={() => setShowModalDress(true)}/>
                    </button>
                    </div>
                    <button className={classes.addToCard}>Add To Card</button>
                    </div>
                    }
                    {showModalDress &&
                    <div className={classes.modal}>
                    <div className={classes.modalElement}>
                        <img src='https://andshop-vue.netlify.app/_nuxt/img/7.6533a8a.png'></img>
                        <div className={classes.modalText}>
                            <h1>Trendy woman black blazer</h1>
                            <div className={classes.modalTextPrice}>
                            <p>$98</p>
                            <s>$120</s>
                            </div>
                            <p>Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.</p>
                            <p>Vendor: Lereve</p>
                            <p>Categories: Hoodie</p>
                            <button>Add to Card</button>
                            <AiOutlineClose className={classes.closeIcon} onClick={() => setShowModalDress(false)}/>
                        </div>
                    </div>
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
                        <MdOutlinePageview style={viewStyle} onClick={() => setShowModaltshirt(true)}/>
                    </button>
                    </div>
                    <button className={classes.addToCard}>Add To Card</button>
                    </div>
                    }
                    {showModaltshirt &&
                    <div className={classes.modal}>
                    <div className={classes.modalElement}>
                        <img src='https://andshop-vue.netlify.app/_nuxt/img/1.7190443.png'></img>
                        <div className={classes.modalText}>
                            <h1>Trendy woman black blazer</h1>
                            <div className={classes.modalTextPrice}>
                            <p>$48</p>
                            <s>$120</s>
                            </div>
                            <p>Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.</p>
                            <p>Vendor: Lereve</p>
                            <p>Categories: Hoodie</p>
                            <button>Add to Card</button>
                            <AiOutlineClose className={classes.closeIcon} onClick={() => setShowModaltshirt(false)}/>
                        </div>
                    </div>
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
                        <MdOutlinePageview style={viewStyle} onClick={() => setShowModalFit(true)}/>
                    </button>
                    </div>
                    <button className={classes.addToCard}>Add To Card</button>
                    </div>
                    }
                    {showModalFit &&
                    <div className={classes.modal}>
                    <div className={classes.modalElement}>
                        <img src='https://andshop-vue.netlify.app/_nuxt/img/11.54a1591.png'></img>
                        <div className={classes.modalText}>
                            <h1>Trendy woman black blazer</h1>
                            <div className={classes.modalTextPrice}>
                            <p>$64</p>
                            <s>$120</s>
                            </div>
                            <p>Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.</p>
                            <p>Vendor: Lereve</p>
                            <p>Categories: Hoodie</p>
                            <button>Add to Card</button>
                            <AiOutlineClose className={classes.closeIcon} onClick={() => setShowModalFit(false)}/>
                        </div>
                    </div>
                </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BestSell;