import React, { useState, useContext } from 'react';
import { Nav, Logo, PenCil, NavPrint, NavProduct, NavLogo, NavRight, NavLeft,Search,Basket, Heart } from '../styles/Navigation.style';
import { FaTshirt } from "react-icons/fa";
import { BasketContext } from '../store/basket-context';

const Navigation: React.FC = () => {
    const [navbar, setNavbar] = useState(false)
    const basketCtx = useContext(BasketContext);

    const stickyNav = () => {
        if (window.scrollY >= 75) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', stickyNav);
    
  return (
    <Nav>
        <NavLeft>
        <NavPrint>
        <PenCil />
        <p>CREATE YOUR OWN PRINT</p>
        </NavPrint>
        <NavProduct>
        <FaTshirt />
      <p>OUR PRODUCTS</p>
        </NavProduct>
        </NavLeft>
      <NavLogo>
          <Logo />
          <h1>Customshop</h1>
      </NavLogo>
      <NavRight>
          <Search />
          <Heart />
          <Basket onClick={basketCtx.changeVisibility}/>
      </NavRight>
    </Nav>
  );
};

export default Navigation;
