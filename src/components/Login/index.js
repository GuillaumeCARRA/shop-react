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
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
        center;
    background-size: cover;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #ffffff;

`;

const Title = styled.h1`
    font-size: 24px; 
    font-weight: 400;
    text-transform: uppercase;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex:1; 
    min-width: 40%;
    margin: 10px 0; 
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
    margin-bottom: 10px; 
    background-color: teal;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    outline-style: none;
`;

const Link = styled.a`
    text-transform: uppercase;
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

function Login() {
    return (
        <Container>
        <Wrapper>
            <Title>
                se connecter
            </Title>
            <Form>
                <Input type="email" placeholder="email"/>
                <Input type="password" placeholder="mot de passe"/>
                <Button>Se connecter</Button>
                <Link>mot de passe oublié ?</Link>
                <Link>créer un nouveau compte</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login;
