import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Shopcontext } from '../Context/Shopcontext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { Loginregnav } from '../Components/Loginregnav/Loginregnav';
import BrandSlider from '../Components/BrandSlider/BrandSlider';
import Footer from '../Components/Footer/Footer';
import { ListCategory } from '../Components/ListCategory/ListCategory';

export const Product = () => {
    const { all_product } = useContext(Shopcontext);
    const { productId } = useParams();

    console.log('all_product:', all_product);
    console.log('productId:', productId);

    // Check if all_product is still loading
    if (!all_product) {
        return <div>Loading product details...</div>;
    }

    // Find the product
    const product = all_product.find((e) => e._id === productId);
    console.log('Found product:', product);

    if (!product) {
        return (
            <div>
                <p>Product not found.</p>
                <p>Looking for ID: {productId}</p>
                <p>Number of products available: {all_product.length}</p>
            </div>
        );
    }

    return (
        <div>
            <Loginregnav />
            <ProductDisplay product={product} />
            <ListCategory />
            <BrandSlider />
            <Footer />
        </div>
    );
};