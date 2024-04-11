import React from 'react';
import { useSelector } from 'react-redux';

import './Basket.scss';

const Basket = () => {
    const totalCount = useSelector(state => state.order.countTotal);

    return (
        <div className="info-basket">
            <img src="../images/basket-icon.svg" alt="basket icon" width="30" height="30" />
           
            { totalCount > 0 && <div className='info-basket__order'>{totalCount}</div> }
        </div>
    )
};

export default Basket;