import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './OrderPopup.scss';

import { bouquetAddedToOrder, bouquetRemovedFromOrder, bouquetDeletedFromOrder, closeOrderModal } from '../../redux/actions/actions';

const OrderPopup = ({ bouquets }) => {
    const dispatch = useDispatch();
    const { orderList, sumTotal } = useSelector(state => state.order);

    return (
        <div className="order-popup__wrapper">
            <div className="order-popup__content">
                <div className="order-popup__close-btn" onClick={() => dispatch(closeOrderModal())}>
                    <img src="../images/popup-close-btn.svg" alt="green close sign" width="30" height="30" />
                </div>
                <h1 className="order-popup__title common-title green-text">Your order</h1>

                {
                    orderList.map(selectedBouquet => {
                        const { id, imageSrc, altSign, name, price, count } = selectedBouquet;
                        return (
                            <div className="order-popup__info" key={id}>
                                <div className="order-popup__info-item flex">
                                    <div className="order-popup__info-img">
                                        <img src={imageSrc} alt={altSign} width="60" height="80" />
                                    </div>
                                    <div className="order-popup__info-main">
                                        <h2 className="order-popup__info-name">{name}</h2>
                                        <div className="order-popup__info-buttons flex">
                                            <button 
                                                className="order-popup__info-btn order-popup__info-btn--increase" 
                                                onClick={() => dispatch(bouquetAddedToOrder({bouquets, id}))}
                                            >+</button>
                                            <span className="order-popup__info-number">{count}</span>
                                            <button 
                                                className="order-popup__info-btn order-popup__info-btn--decrease" 
                                                onClick={() => dispatch(bouquetRemovedFromOrder({bouquets, id}))}
                                            ><div></div></button>
                                        </div>
                                    </div>
                                    <div className="order-popup__info-details">
                                        <p className="order-popup__info-price green-text">£{price}</p>
                                        <button 
                                            className="order-popup__info-remove" 
                                            onClick={() => dispatch(bouquetDeletedFromOrder({bouquets, id}))}
                                        >Remove</button>
                                    </div>
                                </div>
                            </div>           
                        )
                    })
                }                
                
                <div className="order-popup__preorder">
                    <p className="order-popup__preorder-info green-text">Preliminary total: <span>£{sumTotal}</span></p>
                    <button className="order-popup__preorder-btn common-btn">Checkout</button>
                </div>
              
            </div>
        </div>
    )
}


export default OrderPopup;