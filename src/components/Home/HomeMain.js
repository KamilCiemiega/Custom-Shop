import React, { Component } from 'react';
import styled from 'styled-components';
import HomeHeader from './Navigation/Header';
import slideFirst from '../../assets/images/slideFirst.jpg';

const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${props => props.img});
    background-size: cover;
`
const Slider = styled.div`
    width: 100%;
    height: 95%;
`
const SlideText = styled.p`
    font-size:  ${props => props.big ? '3rem' : '1.5rem'};
    color: white;
    font-family: ${props => props.theme.fonts.subFont};
    font-weight: bold;
`

class HomeMain extends Component {
    render(){
        return(
            <MainWrapper img={slideFirst}>
                <HomeHeader />
                <Slider>
                    <SlideText big>
                        Discover the lifestyle
                    </SlideText>
                    <SlideText>
                        Our Collection is<br />made of the best materials
                    </SlideText>
                    <button>SHOP NOW</button>
                </Slider>
            </MainWrapper>
        );
    }
}

export default HomeMain;