import React from 'react'
import ProductsC from '../components/ProductsC';
import  "./Shop.css";
import { Helmet } from 'react-helmet';

const Shop = () => {
    return (
        <div className = 'shoppage'>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <ProductsC />
        </div>
    )
}

export default Shop
