import React, { useContext } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Items } from '../Components/Items/Items';
import './Css/Subcategory.css';

import { Shopcontext } from '../Context/Shopcontext'; 

import Footer from '../Components/Footer/Footer';
import { Loginregnav } from '../Components/Loginregnav/Loginregnav';
import BrandSlider from '../Components/BrandSlider/BrandSlider';
import { ListCategory } from '../Components/ListCategory/ListCategory';

export const Subcategory = (props) => {
    const { all_product } = useContext(Shopcontext);

    if (!all_product) {
        return <div>Loading products...</div>; 
    }

    const filteredProducts = all_product.filter(item => item.category === props.category);

    return (
        <div>
           <Loginregnav />
           

            <div className='shop-category'>

            <img className ='shopcategory-banner' src={props.banner} alt="" />

            
                <div className="shopcategory-indexSort">
                    <p>
                        <span> Showing 1-{filteredProducts.length} </span> out of {filteredProducts.length} products
                    </p>

                    <div className="shopcategory-sort">
                        Sort by <RiArrowDropDownLine />
                    </div>
                </div>

                <div className="shopcategory-products">
                    {filteredProducts.map((item, i) => (
                        <Items
                            key={i}
                            _id={item._id}
                            name={item.name}
                            image={item.image}
                            priceOptions={item.priceOptions}
                        />
                    ))}
                </div>

                <div className="shopcategory-loadmore">
                    Explore More
                </div>
            </div>
            <ListCategory />
            <BrandSlider />
            <Footer />
        </div>
    );
}
