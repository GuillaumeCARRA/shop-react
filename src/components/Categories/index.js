import React from 'react';
import CategoryItem from '../CategoryItem';
import styled from 'styled-components';

import { categories } from '../../data';


const Container = styled.div`
    display: flex;
    justify-content: space-betwenn;
    padding: 20px;
`;


function Categories() {
    return (
        <Container>
            {categories.map(category => (
                <CategoryItem key={category.id}  category={category}/>
            ))}
        </Container>
    )
}

export default Categories;
