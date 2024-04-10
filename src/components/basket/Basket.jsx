import React from 'react';
import { useSelector } from 'react-redux';

const Basket = () => {
    const totalCount = useSelector(state => state.order.countTotal);

    return (
        <div className="top-info__right-block-basket main-block">
            <img src="images/basket-icon.svg" alt="basket icon" width="30" height="30" />
           
            { totalCount > 0 && <div className='top-info__right-block-basket-order'>{totalCount}</div> }
        </div>
    )
};

export default Basket;