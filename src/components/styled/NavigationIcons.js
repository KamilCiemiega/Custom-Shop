import React from 'react';
import styled, { css } from 'styled-components';


const NavigationIcons = ({ iconName, changeColor, rotate}) => {

    const StyledIcon = styled(iconName)`
        cursor:pointer;
        width: ${props => props.width ? '40px' : '25x'};
        height: ${props => props.height ? '40px' : '25px'};
        &:hover{
            ${props => props.changeColor && 
            css`
                color:rgba(255,255,255,0.4);
                transition: all 0.3s;
            `}
            ${props => props.rotate && 
            css`
                transform: rotate(180deg);
                transition: 1s all;
                color:rgba(249, 203, 22,1);
            `}
        }
        transition: 0.3 all;
    `
    return <StyledIcon icon={iconName} changeColor={changeColor} rotate={rotate}></StyledIcon> 
}

export default NavigationIcons;