import React, { useEffect, useState, useRef } from 'react';

import './CategoryPrice.scss';

import { useFilters } from '../../context/FiltersProvider';

const CategoryPrice = () => {
    const [leftData, setLeftData] = useState(0);
    const [rightData, setRightData] = useState(4000);
    const timerRef = useRef(null);

    const { filters, setFilters } = useFilters();
    const { coloursFilters, flowersFilters, formatFilters } = filters;

    useEffect( () => {
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            setFilters({...filters, lowerPriceLimit: leftData, higherPriceLimit: rightData });                  
        }, 250);
    }, [leftData, rightData]);

     useEffect( () => {
        if (!coloursFilters.length && !flowersFilters.length && !formatFilters.length) {
            setLeftData(filters.lowerPriceLimit);
            setRightData(filters.higherPriceLimit);
        }    
    }, [coloursFilters.length, flowersFilters.length, formatFilters.length]);

    return (
        <div className="catalog-details__inner-price">
            <p className="catalog-details__inner-title green-text">
                Cost
            </p>  
            <div className="catalog-details__inner-checkbox-block catalog-details__inner-checkbox-block--price">     
                <span className='catalog-details__inner-checkbox-info catalog-details__inner-checkbox-info--left'>{leftData}</span>                    
                <input 
                    type="range" 
                    id="range-price-left" 
                    name="range-price" 
                    min="0" 
                    max="4000" 
                    value={leftData} 
                    onChange={(e) => setLeftData(+(e.target.value))}
                />
                <input 
                    type="range" 
                    id="range-price-right" 
                    name="range-price" 
                    min="0" 
                    max="4000"
                    value={rightData}
                    onChange={(e) => setRightData(+(e.target.value))}
                />
                <span className='catalog-details__inner-checkbox-info catalog-details__inner-checkbox-info--right'>{rightData}</span>
                <label className='catalog-details__inner-checkbox-label'>Price from £0 to £4000</label>
            </div>                                                 
        </div>
    )
};

export default CategoryPrice;