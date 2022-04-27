import React from 'react';
import styled from 'styled-components';

import {popularProducts} from '../../data';
import ProductItem from '../ProductItem';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function Products() {
    return (
        <Container>
            {popularProducts.map(popularProduct =>(
                <ProductItem key={popularProduct.id} popularProduct={popularProduct} />
            ))}
        </Container>
    )
}

export default Products;
