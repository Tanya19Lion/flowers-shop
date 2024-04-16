import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { bouquetAddedToOrder, bouquetRemovedFromOrder, bouquetDeletedFromOrder, closeOrderModal, clearOrderList } from '../../redux/actions/actions';
import { selectOrderSummData } from '../../redux/selectors/selectors';

import './OrderPopup.scss';

const OrderPopup = () => {
    const dispatch = useDispatch();
    const { orderList, sumTotal, countTotal } = useSelector(selectOrderSummData);

    return (
        <div className="order-popup__wrapper">
            <div className="order-popup__content">
                <div className="order-popup__close-btn" onClick={() => dispatch(closeOrderModal())}>
                    <img src="../images/popup-close-btn.svg" alt="green close sign" width="30" height="30" />
                </div>
                {   countTotal > 0 
                    ? <h1 className="order-popup__title common-title green-text">Your order</h1>
                    : <h1 className="order-popup__title common-title green-text">You have no order</h1>
                }

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
                                                onClick={() => dispatch(bouquetAddedToOrder(id))}
                                            >+</button>
                                            <span className="order-popup__info-number">{count}</span>
                                            <button 
                                                className="order-popup__info-btn order-popup__info-btn--decrease" 
                                                onClick={() => dispatch(bouquetRemovedFromOrder(id))}
                                            ><div></div></button>
                                        </div>
                                    </div>
                                    <div className="order-popup__info-details">
                                        <p className="order-popup__info-price green-text">£{price}</p>
                                        <button 
                                            className="order-popup__info-remove" 
                                            onClick={() => dispatch(bouquetDeletedFromOrder(id))}
                                        >Remove</button>
                                    </div>
                                </div>
                            </div>           
                        )
                    })
                }                
                
                <div className="order-popup__preorder">
                    <p className="order-popup__preorder-info green-text">Preliminary total: <span>£{sumTotal}</span></p>
                    <Link 
                        to='/final-page' 
                        className="order-popup__preorder-btn common-btn" 
                        onClick={() => {
                            dispatch(closeOrderModal(true));
                            dispatch(clearOrderList());
                        }}
                    >Checkout</Link>
                </div>
              
            </div>
        </div>
    )
}


export default OrderPopup;