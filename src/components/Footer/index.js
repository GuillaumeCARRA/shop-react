import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;

`;

/*LEFT SIDE START */
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`
    font-family: Urbanist, sans-serif;
    font-weight: 800; 
    text-transform: uppercase; 
`;

const Description = styled.p`
    margin: 20px 0;
    font-family: Urbanist, sans-serif;
    font-weight: 300; 
`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
/*LEFT SIDE END */

/*CENTER START */
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
/*CENTER END */

/*RIGHT SIDE START */
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
/*RIGHT SIDE END */

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>
                    Boutique
                </Logo>
                <Description>
                    Plfpldglpglpdglpdglprlghprkkhpkrtphkpdkstdkktrtohtjsh
                    flbklfkùfdkhldklkdholktrdhoktdokotdskoj,qfdjznq,Fepflepkfge
                    dpmldplppepzpzpfllfplzdpzqpaapeorepgfk,b,odfbkofddùùd.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Icon name="facebook" size="large"/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Icon name="instagram" size="large"/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Icon name="twitter" size="large"/>
                    </SocialIcon>
                    <SocialIcon color="FFD700">
                        <Icon name="snapchat ghost" size="large"/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    Liens Utiles
                </Title>
                <List>
                    <ListItem>
                       Accueil
                    </ListItem>
                    <ListItem>
                        Panier
                    </ListItem>
                    <ListItem>
                        Mode Homme
                    </ListItem>
                    <ListItem>
                        Mode Femme
                    </ListItem>
                    <ListItem>
                       Accessoires
                    </ListItem>
                    <ListItem>
                        Mon compte
                    </ListItem>
                    <ListItem>
                       Suivi de Commande
                    </ListItem>
                    <ListItem>
                       Liste de souhait
                    </ListItem>
                    <ListItem>
                        Condition
                    </ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem>
                    <Icon name="map marker alternate"/> 
                    742 Evergreen Terrace à Springfield
                </ContactItem>
                <ContactItem>
                    <Icon name="phone"/> 
                    01 11 11 11 11
                </ContactItem>
                <ContactItem>
                    <Icon name="mail"/>
                    boutique@boutique.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;
