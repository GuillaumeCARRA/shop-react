import React from 'react';
import styled from "styled-components"; 

import Navbar from '../Navbar';
import Announcement from '../Announcement';
import Products from '../Products';
import Newsletter from '../Newsletter';
import Footer from '../Footer';


const Container = styled.div`
`;

const Title = styled.h1`
    font-family: Urbanist, sans-serif;
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-family: Urbanist, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;


const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    background-color: #ffffff; 
    outline-style: none;
`;

const Option = styled.option`
  
`;

function ProductList() {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>
              Vêtements
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filtre Produits:
                    </FilterText>  
                    <Select>
                        <Option disabled selected>
                            Couleur
                        </Option>
                        <Option >Blanc</Option>
                        <Option>Noir</Option>
                        <Option>Rouge</Option>
                        <Option>Bleu</Option>
                        <Option>Vert</Option>
                        <Option>Jaune</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Taille
                        </Option>
                        <Option >XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Trier Produits:
                    </FilterText>
                    <Select>
                        <Option selected>Plus récent</Option>
                        <Option>Prix (croissant)</Option>
                        <Option>Prix (décroissant)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;
