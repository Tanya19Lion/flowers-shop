import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './CategoryPrice.scss';

import { lowLimitChange, highLimitChange } from '../../redux/actions/actions';
import { selectPriceData } from '../../redux/selectors/selectors';

const CategoryPrice = () => {
    const dispatch = useDispatch();
    const [lowData, setLowData] = useState(0);
    const [highData, setHighData] = useState(4000);

    const { lowPriceLimit, highPriceLimit, resetFilters } = useSelector(selectPriceData);

    useEffect( () => {
        dispatch(lowLimitChange(lowData));                  
    }, [lowData]);

    useEffect( () => {
        dispatch(highLimitChange(highData));                  
    }, [highData]);

    useEffect( () => {
        setLowData(lowPriceLimit);
        setHighData(highPriceLimit);
    }, [resetFilters]);

    return (
        <div className="catalog-details__inner-block">
            <p className="catalog-details__inner-title green-text">
                Cost
            </p>  
            <div className="catalog-details__inner-checkbox-block catalog-details__inner-checkbox-block--price">     
                <span className='catalog-details__inner-checkbox-info catalog-details__inner-checkbox-info--left'>{lowData}</span>                    
                <input 
                    type="range" 
                    id="range-price-left" 
                    name="range-price" 
                    min="0" 
                    max="4000" 
                    value={lowData} 
                    onChange={(e) => setLowData(+(e.target.value))}
                />
                <input 
                    type="range" 
                    id="range-price-right" 
                    name="range-price" 
                    min="0" 
                    max="4000"
                    value={highData}
                    onChange={(e) => setHighData(+(e.target.value))}
                />
                <span className='catalog-details__inner-checkbox-info catalog-details__inner-checkbox-info--right'>{highData}</span>
                <label className='catalog-details__inner-checkbox-label'>Price from £0 to £4000</label>
            </div>                                                 
        </div>
    )
};

export default CategoryPrice;