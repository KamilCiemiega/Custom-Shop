import React from 'react';
import styled, { css } from 'styled-components';


const NavigationIcons = ({ iconName, changeColor}) => {

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
        }
    `
    return <StyledIcon icon={iconName} changeColor={changeColor}></StyledIcon> 
}

export default NavigationIcons;