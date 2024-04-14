import React from 'react';

import './OrderPhoneElement.scss';

const OrderPhoneElement = ({ handleOpenModal }) => {
    return (
        <span className="order-phone main-block" onClick={handleOpenModal}>
            <span className="order-phone__img">
                <img src="images/order-phone-icon.svg" alt="phone icon" width="12" height="12" />
            </span>
            Order the call
        </span>
    )    
}

export default OrderPhoneElement;

