import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import {sliderItems} from '../../data';


const Container = styled.div`
    width: 100%;
    height: 100vh; 
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: .5; 
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex; 
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw); 
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const ImageItem = styled.img`
    height: 80%;
    margin-left: 80px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    font-family: Urbanist, sans-serif;
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 70px;
`;

const Description = styled.p`
    text-transform: uppercase;
    margin: 50px 0;
    font-size: 20px; 
    font-weight: 500;
    letter-spacing: 3px; 
`;

const Button = styled.button`
    text-transform: uppercase;
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer; 
`;


function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    console.log(slideIndex);

    const handleClick = (direction) => {
        if(direction ==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <Icon name="arrow left"/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(items => (
                    <Slide bg={items.bg} key={items.id}>
                        <ImgContainer>
                            <ImageItem src={items.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{items.title}</Title>
                            <Description>{items.desc}</Description>
                            <Button>voir produit</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <Icon name="arrow right"/>
            </Arrow>
        </Container>
    )
}

export default Slider;
