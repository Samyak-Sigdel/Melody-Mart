import React, { useContext } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Items } from '../Components/Items/Items';
import './Css/Subcategory.css';

import { Shopcontext } from '../Context/Shopcontext'; 
import { ListCategory } from '../Components/ListCategory/ListCategory';
import { Navbar } from '../Components/Navbar/Navbar';

export const Subcategory = (props) => {
    const { all_product } = useContext(Shopcontext);

    if (!all_product) {
        return <div>Loading products...</div>; // Handles the case where all_product is undefined
    }

    const filteredProducts = all_product.filter(item => item.category === props.category);

    return (
        <div>
            <Navbar />
           

            <div className='shop-category'>
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
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            priceperday={item.priceperday}
                        />
                    ))}
                </div>

                <div className="shopcategory-loadmore">
                    Explore More
                </div>
            </div>
            <ListCategory />
        </div>
    );
}
