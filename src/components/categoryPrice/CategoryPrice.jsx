import React from 'react';

const CategoryPrice = () => {
    return (
        <div className="catalog-details__inner-price">
            <p className="catalog-details__inner-title green-text">
                Cost
            </p>  
            <div className="catalog-details__inner-checkbox-block">                         
                <input type="range" id="range-price" name="range-price" min="0" max="4000" />
                <label htmlFor="range-price">Price from £0 to £4000</label>
            </div>                                                 
        </div>
    )
};

export default CategoryPrice;