import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search'
import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { Basket } from '@styled-icons/boxicons-regular/Basket';
import { ShoppingBags } from '@styled-icons/boxicons-solid/ShoppingBags';
import Icon from '../styled/NavigationIcons';

const NavWrapper = styled.div`
    width: 100%;
    height:75px;
    background: rgba(228, 228, 228, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: sticky;
    top:0;
    z-index:999;
    box-shadow:2px 2px 3px 3px rgba(0,0,0,0.2);
    background: ${props => props.navbar && 'rgba(0,0,0,1)'};
    ${props =>
        props.navbar &&
        css`
            background: rgba(0, 0, 0, 0.5);
            height: 65px;
            box-shadow:0;
            color: white;
            transition: all 0.5s;
        `}
    transition: all 0.5s;
`
const ElemWrapper = styled.div`
    width: ${props => props.title ? '400px' : '250px'};
    height: 100%;
    display: flex;
    align-items:center;
    flex-direction:row;
    justify-content: space-evenly;
`

const LinkItem = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    font-family: ${ props => props.theme.fonts.mainFont};
    font-weight: ${props => props.bold && 'bold'};
    font-size: ${ props => props.size && '1.5rem'};
    color: ${props => props.navbar && 'rgba(255,255,255,1)'};
    &:hover{
        color:rgba(255,255,255,0.4);
        transition: all 0.3s;
        ${props =>
        props.bottom &&
        css`
                padding-bottom: 10px;
                color: rgba(249, 203, 22, 0.6);
                border-bottom: 2px solid rgba(249, 203, 22,1);
            `}
            ${props => props.newHover &&
        css`
            color:rgba(255,255,255,0.4);
            transition: all 0.3s;
            padding:0;
            border:none;
        `}
    }
   
`

const IconWrapper = styled.div`
    width:45px;
    height:45px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background: rgba(0, 0, 0, 0.3);
       border-radius: 50px;
       transition: ease-in 0.25s;
       background: ${props => props.newHover && 'transparent'};
    }
`

const HomeHeader = props => {
    const [navbar, setNavbar] = useState(false)


    const changeBackground = () => {
        if (window.scrollY >= 75) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <NavWrapper navbar={navbar}>
            <ElemWrapper>
                <LinkItem bottom navbar={navbar} newHover={navbar}>
                    Home
                </LinkItem>
                <LinkItem bottom navbar={navbar} newHover={navbar}>
                    Catalog
                </LinkItem>
            </ElemWrapper>
            <ElemWrapper title='true'>
                <LinkItem bold size='true' navbar={navbar}>
                    <Icon iconName={ShoppingBags} width='true' height='true' />
                    CustomShop
                </LinkItem>
            </ElemWrapper>
            <ElemWrapper>
                <IconWrapper newHover={navbar}>
                    <Icon iconName={Search} changeColor={navbar} />
                </IconWrapper>
                <IconWrapper newHover={navbar}>
                    <Icon iconName={HeartFill} changeColor={navbar} />
                </IconWrapper>
                <IconWrapper newHover={navbar}>
                    <Icon iconName={Basket} changeColor={navbar} />
                </IconWrapper>
            </ElemWrapper>
        </NavWrapper>
    );
}

export default HomeHeader;