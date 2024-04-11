import React, { useEffect } from 'react';

import './Delivery.scss';

const Delivery = () => { 

    useEffect(() => {		
		const pageHeader = document.querySelector('.header');
		pageHeader.style.backgroundColor = '#000000';
		pageHeader.style.marginBottom = '100px';
        pageHeader.classList.remove('header-with-basket');    
	}, []);

    return (
        <main className="delivery-main chapter-margin"> 
            <section className="delivery-main-title-block chapter-margin">
                <div className="container">
                    <h1 className="delivery-main-title top-title">
                        <p className="delivery-main-title__first-part">Delivery</p>
                        <p className="delivery-main-title__second-part">and payment</p>
                    </h1>
                </div>
            </section>

            <section className="delivery bigger-text">
                <div className="container">
                    <div className="delivery-info">
                        <h2 className="delivery-info__title pink-heading">Payment methods:</h2>
                        <div className="delivery-info__inner flex  chapter-margin">
                            <div className="delivery-info__inner-item main-block">
                                BY BANK CARD WHEN PLACING AN ORDER THROUGH THE SITE or via the link
                            </div>
                            <div className="delivery-info__inner-item main-block">
                                IN CASH, BY BANK CARD AT PICKUP OR from the organization’s current account
                            </div>
                            <div className="delivery-info__inner-item main-block">
                                CASH ON DELIVERY BY COURIER
                            </div>
                            <div className="delivery-info__inner-item main-block">
                                CRYPTOCURRENCY
                            </div>
                        </div>
                    </div>

                    <div className="delivery-cost chapter-margin">
                        <h3 className="delivery-cost__title pink-heading">Cost of delivery:</h3>
                        <ul className="delivery-cost__list">
                            <li className="delivery-cost__list-item">
                                <span className="bold-text">Free</span> on orders <span className="green-text">over £90</span>
                            </li>
                            <li className="delivery-cost__list-item">
                                <span className="bold-text">£10</span> for orders <span className="green-text">under £90</span>
                            </li>
                            <li className="delivery-cost__list-item">
                                You can also pick up your order yourself at the address: <span className="green-text">London, BakerStreet 221b daily from 10.00am to 21.00pm</span>
                            </li>
                        </ul>
                    </div>

                    <div className="delivery-term chapter-margin">
                        <h3 className="delivery-term__title pink-heading">Delivery terms:</h3>
                        <ul className="delivery-term__list">
                            <li className="delivery-term__list-item">
                                Delivery is carried out within the city <span className="green-text"> on any day.</span>
                            </li>
                            <li className="delivery-term__list-item">
                                The possibility, timing and cost of delivery outside the city, delivery at night, holidays <span className="green-text"> are discussed with a manager.</span>
                            </li>                            
                        </ul>
                    </div>
                </div>                   
            </section>

            <section className="delivery-about bigger-text">
                <div className="container">
                    <div className="delivery-about-info main-block">
                        <h3 className="delivery-about__title pink-heading">Additionally:</h3>
                        <p className="delivery-about__text delivery-about__text--first-sentence">
                            Delivery to another person is possible only if the customer pays for the order. Delivery is carried out no earlier than 2 hours after payment for the order, but may be earlier if the bouquet is in stock or by agreement
                            with the manager.
                        </p>
                        <p className="delivery-about__text delivery-about__text--second-sentence">
                            The waiting time for the courier is 15 minutes.
                        </p>
                        <p className="delivery-about__text delivery-about__text--third-sentence">
                            If at the time of delivery of flowers the recipient is not available or for other reasons it is not possible to make delivery (inaccurate address indicated, closed front door, access control system, etc.), we reserve the right, at our own choice:
                        </p>
                        <ul className="delivery-about__list">
                            <li className="delivery-about__list-item">leave flowers for the person who answered the door;</li>
                            <li className="delivery-about__list-item">agree with the customer on re-delivery, which will be paid additionally;</li>
                            <li className="delivery-about__list-item">refuse to send flowers without a refund.</li>
                        </ul>                        
                        <p className="delivery-about__text delivery-about__text--four-sentence">
                            If you or another recipient has not received the order, you need to inform the manager by phone <a href="tel:+44171552948" className="green-text">+44 171 552948</a>.
                        </p>
                        <h3 className="delivery-about__title pink-heading">Refund:</h3>
                        <p className="delivery-about__text delivery-about__text--five-sentence">
                            If the customer cancels the order within two hours, if the order has not yet begun to be prepared, the funds will be returned in full. 
                            If the florist has begun preparations, then the customer has the right to a refund of 50% of the cost, or, if it has not yet been paid, then he is obliged to pay 50%.
                        </p>
                        <p className="delivery-about__text delivery-about__text--six-sentence">
                            Flowers of proper quality cannot be returned or exchanged, and if there are any defects in the flowers, returns are made only if these defects are not natural defects of the plant.
                            Refunds are made immediately to the account from which the payment was made; their receipt in the account depends on the payment system.
                        </p>
                    </div>
                </div>
            </section>

            <section className="delivery-image">
                <div className="container">
                    <div className="delivery-img">
                        <img src="images/delivery-lover-flower.webp" alt="lower flower text" width="245" height="180" />
                    </div>
                </div>
            </section>

        </main>
    )
};

export default Delivery;

