import React, { useState } from 'react';

import './CategoriesPrice.scss';

const CategoryPrice = () => {
    const [leftData, setLeftData] = useState(0);
    const [rightData, setRightData] = useState(4000);

    // console.log(leftData);
    // console.log(rightData);
    return (
        <div className="catalog-details__inner-price">
            <p className="catalog-details__inner-title green-text">
                Cost
            </p>  
            <div className="catalog-details__inner-checkbox-block catalog-details__inner-checkbox-block--price">                         
                <input type="range" id="range-price-left" name="range-price" min="0" max="4000" value={leftData} onChange={(e) => setLeftData(e.target.value)}/>
                <input type="range" id="range-price-right" name="range-price" min="0" max="4000"  value={rightData} onChange={(e) => setRightData(e.target.value)}/>
                <label>Price from £0 to £4000</label>
            </div>                                                 
        </div>
    )
};

export default CategoryPrice;