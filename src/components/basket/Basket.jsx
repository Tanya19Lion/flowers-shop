import React from 'react';
import { useSelector } from 'react-redux';

import { selectCountTotal } from '../../redux/selectors/selectors';

import './Basket.scss';

const Basket = ({ handleOpenOrderModal }) => {
    const totalCount = useSelector(selectCountTotal);

    return (
        <button className="info-basket" onClick={handleOpenOrderModal}>
            <img src="../images/basket-icon.svg" alt="basket icon" width="30" height="30" />
           
            { totalCount > 0 && <div className='info-basket__order'>{totalCount}</div> }
        </button>
    )
};

export default Basket;