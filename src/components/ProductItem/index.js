import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

//we define Info before container
//because like that we can use the hover effect
//or we are a warning and its not working
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex; 
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all .5s ease; 
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 380px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #ffffff;
    position: absolute;
`;


const Image = styled.img`
    height: 75%;
    z-index: 2;
`;


const Icons = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex; 
    align-items: center;
    justify-content: center;
    margin: 10px; 
    cursor: pointer;
    transition: all .5s ease; 
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
    
`;




function ProductItem({ popularProduct }) {
    return (
        <Container>
            <Circle />
            <Image src={popularProduct.img}/>
            <Info>
                <Icons>
                    <Icon name="shopping cart"/>  
                </Icons>
                <Icons>
                    <Icon name="search"/>
                </Icons>
                <Icons>
                    <Icon name="heart"/>
                </Icons>
                
                {/* <Title>
                    {popularProduct.title}
                </Title> */}
            </Info>
        </Container>
    )
}

export default ProductItem;
