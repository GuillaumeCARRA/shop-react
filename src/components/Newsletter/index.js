import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;

const Title = styled.h1`
    font-size: 70px;
    font-family: Urbanist, sans-serif;
    font-weight: 800;
    margin: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-family: Urbanist, sans-serif;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #ffffff;
`;


function Newsletter() {
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Description>
                Inscrivez vous pour être prévenu de nos derniers arrivages
            </Description>
            <InputContainer>
                <Input 
                    type="email" 
                    placeholder="Votre email"
                />
                <Button>
                    <Icon 
                        name="send" 
                        size="large"
                    />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter;
