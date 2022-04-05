import React, { useState, useContext, useEffect } from 'react';
import { FaTshirt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { BasketContext } from '../../store/basket-context';
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import classes from './Navigation.module.css';

const Navigation = () => {
    const [navbar, setNavbar] = useState(false)
    const basketCtx = useContext(BasketContext);

    const stickyNav = () => {
        if (window.scrollY >= 75) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', stickyNav);
      return () => {
        window.removeEventListener('scroll', stickyNav)
      }
    }, [])
    
    const pencilstyle = {marginLeft: '15px'};
    const logoStyle = {width: '50px', height:'50px'};
    const iconStyle = {width: '30px', height: '30px', cursor: 'pointer'};

  return (
    <div className={classes.nav}>
        <div className={classes.navLeft}>
        <div className={classes.navPrint}>
        <BsFillPencilFill style={pencilstyle}/>
        <p>CREATE YOUR OWN PRINT</p>
        </div>
        <div className={classes.navProduct}>
        <FaTshirt />
      <p>OUR PRODUCTS</p>
        </div>
        </div>
      <div className={classes.navLogo}>
          <AiFillShopping style={logoStyle} />
          <h1>Customshop</h1>
      </div>
      <div className={classes.navRight}>
          <BiSearchAlt2 style={iconStyle}/>
          <AiOutlineHeart style={iconStyle}/>
          <BsFillBasket2Fill style={iconStyle} onClick={basketCtx.changeVisibility}/>
      </div>
    </div>
  );
};

export default Navigation;
