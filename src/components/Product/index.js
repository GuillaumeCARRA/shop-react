import React from 'react';
import styled from "styled-components"; 
import { Icon } from 'semantic-ui-react';

import Announcement from '../Announcement';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Newsletter from '../Newsletter';


const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover; 
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;


const Title = styled.h1`
    font-family: Urbanist, sans-serif; 
    font-weight: 400

`;

const Description = styled.p`
    font-family: Urbanist, sans-serif; 
    margin: 20px 0;
`;

const Price = styled.span`
    font-family: Urbanist, sans-serif; 
    font-weight: 200;
    font-size: 25px 
`;


const FilterContainer = styled.div`
    width: 50%; 
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
   
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px; 
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px; 
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px; 
    padding: 5px;
`;

const FilterOption = styled.option`

`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    justify-content: space-between; 
    
`;

const AmountContainer = styled.div`
    display: flex;
    align-items:center;
    font-weight: 700; 
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items:center;
    justify-content: center; 
    margin: 0 5px;
`;

const Button = styled.button`
    text-transform: uppercase;
    padding: 15px;
    border: 2px solid teal;
    border-radius: 10px;
    background-color: #ffffff; 
    cursor: pointer;
    font-weight: 600;
    outline-style: none;

    &:hover {
        background-color: #f8f4f4
    }
`;



function Product() {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        Jean
                    </Title>
                    <Description>
                        La meilleure description La meilleure description La meilleure description La meilleure description La meilleure description
                        La meilleure description La meilleure description La meilleure description La meilleure description La meilleure description
                        La meilleure description La meilleure description La meilleure description La meilleure description.
                    </Description>
                    <Price>
                        20€
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Couleur:
                            </FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Taille
                            </FilterTitle>
                            <FilterSize>
                                <FilterOption>
                                        XS    
                                </FilterOption>
                                <FilterOption>
                                        S    
                                </FilterOption>
                                <FilterOption>
                                        M   
                                </FilterOption>
                                <FilterOption>
                                        L    
                                </FilterOption>
                                <FilterOption>
                                        XL    
                                </FilterOption>
                                <FilterOption>
                                        XXL    
                                </FilterOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Icon name="plus" />
                            <Amount>
                                1
                            </Amount>
                            <Icon name="minus" />
                        </AmountContainer>
                        <Button> 
                            ajouter au panier
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;
