import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from "styled-components"; 

import Announcement from '../Announcement';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Container = styled.div`

`;


const Wrapper = styled.div`
   padding: 20px; 
`;

const Title = styled.h1`
    font-weight: 300;
    font-family: Urbanist, sans-serif;
    text-align: center;
    text-transform: uppercase;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopBtn = styled.button`
    padding: 10px; 
    font-weight: 600; 
    text-transform: uppercase;
    cursor: pointer; 
    outline-style: none;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTxts = styled.div`

`;

const TopTxt = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 30px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;


const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PdtDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Details = styled.div`
    padding: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Image = styled.img`
    width: 200px; 
`;

const ProductName = styled.span`
    
`;

const ProductId = styled.span`
    
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span`
    
`;

const PriceDetail = styled.span`
    flex:1 ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;



const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee; 
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SumTitle = styled.h1`
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
`;

const SumItem = styled.div`
    margin: 50px 0;
    display: flex;
    font-size: 18px;
    justify-content: space-between; 
    font-weight: ${props=>props.type === "total" && "600"};
    font-size: ${props=>props.type === "total" && "25px"};
`;

const SumTxt = styled.span`

`;

const SumPrice = styled.span`

`;

const SumButton = styled.button`
    text-transform: uppercase;
    width: 100%;
    padding: 10px;
    font-size: 20px;
    background-color: black;
    color: #ffffff;
    font-weight: 600;
    outline-style: none;
    cursor: pointer;
`;

function Cart() {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>
                    Votre panier
                </Title>
                <Top>
                    <TopBtn>
                        poursuivre vos achats
                    </TopBtn>
                    <TopTxts>
                        <TopTxt>
                            Panier(2)
                        </TopTxt>
                        <TopTxt>
                            Liste de souhaits(0)
                        </TopTxt>
                    </TopTxts>
                    <TopBtn type="filled">
                        passer au paiement
                    </TopBtn>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <PdtDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName>
                                        Produit: le nom du produit
                                    </ProductName>
                                    <ProductId>
                                        Référence: la référence du produit
                                    </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>
                                        Taille: 0
                                    </ProductSize>
                                </Details>
                            </PdtDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Icon name="plus" />
                                    <ProductAmount>
                                        2
                                    </ProductAmount>
                                    <Icon name="minus" />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    20€
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <PdtDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                    <ProductName>
                                        Produit: le nom du produit
                                    </ProductName>
                                    <ProductId>
                                        Référence: la référence du produit
                                    </ProductId>
                                    <ProductColor color="gray"/>
                                    <ProductSize>
                                        Taille: M
                                    </ProductSize>
                                </Details>
                            </PdtDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Icon name="plus" />
                                    <ProductAmount>
                                        2
                                    </ProductAmount>
                                    <Icon name="minus" />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    15€
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SumTitle>
                            Récap de commande
                        </SumTitle>
                        <SumItem>
                            <SumTxt>Total</SumTxt>
                            <SumPrice>35€</SumPrice>
                        </SumItem>
                        <SumItem>
                            <SumTxt>Frais de Port</SumTxt>
                            <SumPrice>5€</SumPrice>
                        </SumItem>
                        <SumItem>
                            <SumTxt>Remise Frais de Port</SumTxt>
                            <SumPrice>-5€</SumPrice>
                        </SumItem>
                        <SumItem type="total">
                            <SumTxt >Total de la commande</SumTxt>
                            <SumPrice>35€</SumPrice>
                        </SumItem>
                        <SumButton>
                            Paiement
                        </SumButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
