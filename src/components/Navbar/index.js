import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';



const Container = styled.div`
    height: 60px;
   
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// we consider the wrapper it's 100%
const Left = styled.div`
    flex: 1;
    display: flex; 
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div `
    border: 1px solid lightgray;
    display: flex; 
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none; 
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-family: Urbanist, sans-serif; 
    font-weight: 800; 
    text-transform: uppercase; 
`


const Right = styled.div`
    flex: 1;
    display: flex; 
    align-items: center;
    justify-content: flex-end; 
`;

const MenuItem = styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;


function Navbar() {
    return (
        <Container>
            <Wrapper>
              <Left>
                <Language>FR</Language>
                <SearchContainer> 
                   <Input />
                    <Icon 
                        name="search" 
                        color='grey'
                    />
                </SearchContainer>
              </Left>
              <Center>
                <Logo>
                    boutique
                </Logo>
              </Center>
              <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Icon name="shopping cart"/>
                </MenuItem>
              </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
