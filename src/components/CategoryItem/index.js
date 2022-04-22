import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    flex: 1; 
    margin: 3px;
    height: 70vh;
    position: relative;
    font-family: Urbanist, sans-serif;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: #ffffff;
    margin-bottom: 20px;
    text-transform: uppercase; 
`;

const Button = styled.button`
    border: 2px solid #ffffff;
    border-radius: 20px;
    outline-style: none;
    padding: 10px;
    background-color: transparent;
    color: #ffffff;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
`;
 

function CategoryItem({category}) {
    return (
        <Container>
            <Image src={category.img}/>
            <Info>
                <Title>
                    {category.title}
                </Title>
                <Button>
                    Ajouter au panier
                </Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;
