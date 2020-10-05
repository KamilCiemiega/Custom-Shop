import React from 'react';
import styled, { css } from 'styled-components';
import emptyBasket from '../../../assets/icons/shoppingCart.svg';

const BasketWrapper = styled.div`
    width: 350px;
    height:100%;
    background:black;
    position:absolute;
    top:0;
    right:0;
    z-index:10;
`
const Wrapper = styled.div`
    width: 100%;
    height: 75px;
    position: relative;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-image: url(${emptyBasket})};
  &:after {
    ${props => props.after && css`
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        height: 1px;
        width: 100%;
        background:rgba(249, 203, 22,1);
    `}
  }
`
const H1 = styled.h1`
    color:white;
    font-size: 1rem;
    font-family: ${props => props.theme.fonts.subFont};
`
const Button = styled.button`
    width: 20px;
    height: 20px;
`

const Basket = () => {
    return (
        <BasketWrapper>
            <Wrapper after="true" image="true">
                <H1>
                    Shopping Cart
                </H1>
                <Button>

                </Button>
            </Wrapper>
        </BasketWrapper>
    );
}

export default Basket;