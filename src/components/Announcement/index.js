import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px; 
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: Urbanist, sans-serif;
    font-weight: 500;

`

function Announcement() {
    return (
        <Container>
            Livraison Gratuite sur Toutes Commandes de Plus De 50€
        </Container>
    )
}

export default Announcement;
