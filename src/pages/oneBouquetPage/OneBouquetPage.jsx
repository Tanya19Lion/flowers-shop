import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import OrderPopup from '../../components/orderPopup/OrderPopup';

import './OneBouquetPage.scss';

import { bouquetAddedToOrder, openOrderModal } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';

const OneBouquetPage = () => {
    useEffect(() => {		
		const pageHeader = document.querySelector('.header');
		pageHeader.style.backgroundColor = '#000000';
		pageHeader.style.marginBottom = '100px';
        pageHeader.classList.remove('header-with-basket');    

        window.scrollTo(0, 0);
	}, []);

    const { id } = useParams();
    const { getOneBouquet } = useFlowersService(); 
    const [oneBouquet, setOneBouquet] = useState([]);

    useEffect(() => {
		getOneBouquet(id).then(data => setOneBouquet(data));
	}, [id]);

    const dispatch = useDispatch();
    const isOrderModalOpen = useSelector(state => state.order.isOrderModalOpen);

    const handlePopupOpen = (id) => {
        dispatch(openOrderModal());  
        dispatch(bouquetAddedToOrder(id));
    }

    const { imageSrc, altSign, name, price } = oneBouquet;

    return (
        <main className="one-order">
            <section className="one-order__main chapter-margin">
                <div className="container">
                    <div className="one-order__inner flex">
                        <div className="one-order__image">
                            <img src={imageSrc} alt={altSign} width="350" height="460" />
                        </div>
                        <div className="one-order__info">
                            <h1 className="one-order__info-title top-subtitle">{name}</h1>
                            <p className="one-order__info-price green-text">£{price}</p>
                            <div className="one-order__info-buttons flex">
                                <button 
                                    className="one-order__info-btn common-btn" 
                                    onClick={() => handlePopupOpen(id)}
                                >Add to the basket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { isOrderModalOpen && createPortal(<OrderPopup/>, document.querySelector('#portal-wrapper')) }

            <section className="one-order__addition chapter-margin">
                <div className="container">
                    <h2 className="one-order__addition-title pink-heading">In addition to ordering:</h2>
                    <div className="one-order__addition-inner flex">
                        <div className="one-order__addition-item main-block">
                            <h3 className="one-order__addition-item-title green-text">Fertilizers for cut flowers</h3>
                            <p className="one-order__addition-item-text">
                                If you indicate this in your wishes for the bouquet, we will include a bag of fertilizer for you
                            </p>
                        </div>
                        <div className="one-order__addition-item main-block">
                            <h3 className="one-order__addition-item-title green-text">We will sign a postcard for you</h3>
                            <p className="one-order__addition-item-text">                            
                                In your wishes for the bouquet, indicate the text you want to place and select the card itself on the website
                            </p>
                        </div>
                        <div className="one-order__addition-item main-block">
                            <h3 className="one-order__addition-item-title green-text">Photo of the bouquet before sending</h3>
                            <p className="one-order__addition-item-text">
                                Please indicate in the order notes about this and we will send a photo of the finished bouquet before delivery.
                                On holidays due to with a heavy workload this is not possible
                            </p>
                        </div>
                        <div className="one-order__addition-item main-block">
                            <h3 className="one-order__addition-item-title green-text">Bouquet surprise</h3>
                            <p className="one-order__addition-item-text">
                                If you want the recipient not to know what he will be given and from whom, then indicate this in the order notes
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="one-order__delivery bigger-text">
                <div className="container">
                    <h2 className="one-order__delivery-title green-text">Shipping and payment</h2>
                    <div className="one-order__delivery-info">
                        <h3 className="one-order__delivery-subtitle pink-heading">Payment Methods:</h3>
                        <ul className="one-order__delivery-list">
                            <li className="one-order__delivery-list-item">BY BANK CARD WHEN PLACING AN ORDER VIA THE SITE</li>
                            <li className="one-order__delivery-list-item">BY CASH OR BANK CARD FOR PICKUP</li>
                            <li className="one-order__delivery-list-item">CASH ON DELIVERY BY COURIER</li>
                            <li className="one-order__delivery-list-item">ONLINE CRYPTOCURRENCY</li>
                        </ul>
                    </div>

                    <div className="one-order__delivery-cost">
                        <h3 className="one-order__delivery-subtitle pink-heading">Cost of delivery:</h3>
                        <ul className="one-order__delivery-list">
                            <li className="one-order__delivery-list-item"><span className="bold-text">Free</span> on orders <span className="green-text"> over £90</span></li>
                            <li className="one-order__delivery-list-item"><span className="bold-text">£10</span> for orders <span className="green-text">under £90</span></li>
                            <li className="one-order__delivery-list-item">The possibility, timing and cost of delivery outside the city, delivery at night, holidays <span className="green-text"> are discussed with the manager</span></li>
                            <li className="one-order__delivery-list-item">You can also pick up your order yourself at the address: <span className="green-text"> London, BakerStreet 221b daily from 10am to 21pm</span></li>
                        </ul>
                    </div>

                    <div className="one-order__delivery-conditions">
                        <h3 className="one-order__delivery-subtitle pink-heading">Delivery conditions:</h3>
                        <p className="one-order__delivery-text">
                            Delivery is carried out within the city <span className="green-text">on any day from 09am to 22pm.</span>
                        </p>
                        <p className="one-order__delivery-text">
                            Delivery at night is carried out by agreement with the operator
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OneBouquetPage;
