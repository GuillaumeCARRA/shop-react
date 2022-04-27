import React from 'react';
import styled from "styled-components"; 


const Container = styled.div`
    width: 100vw;
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), 
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
        center;
    background-size: cover;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #ffffff;

`;

const Title = styled.h1`
    font-size: 24px; 
    font-weight: 400;
    text-transform: uppercase;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap; 
    flex-direction: column;
`;

const Input = styled.input`
    flex:1; 
    min-width: 40%;
    margin: 20px 10px 0 0; 
    padding: 10px;
    outline-style: none;
    border-radius: 10px; 
    border: 2px solid teal;
`;

const Button = styled.button`
    width: 30%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin-top: 15px; 
    background-color: teal;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    outline-style: none;
`;


function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>
                    créer votre compte
                </Title>
                <Form>
                    <Input type="text" placeholder="prénom"/>
                    <Input type="text" placeholder="nom"/>
                    <Input type="email" placeholder="email"/>
                    <Input type="password" placeholder="mot de passe"/>
                    <Input type="password" placeholder="confirmer le mot de passe"/>
                    <Button>créer son compte</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;
