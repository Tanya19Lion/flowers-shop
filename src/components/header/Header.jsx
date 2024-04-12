import React from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './Header.scss';

import Basket from '../basket/Basket';
import OrderPopup from '../orderPopup/OrderPopup';

import { openOrderModal } from '../../redux/actions/actions';

const Header = () => {
    const dispatch = useDispatch();

    const isOrderModalOpen = useSelector(state => state.order.isOrderModalOpen);
	const bouquets = useSelector(state => state.bouquets.bouquets);

	const handleOpenOrderModal = () => {
		dispatch(openOrderModal());  
	}

    return (
        <>
        <header className="header">   {/* <header className="header header-not-found">        */}             
            <div className="container">
                <div className="header-top flex">
                    <nav className="header__menu flex">           
                        <div className="header__menu-logo">
                            <NavLink end to="/" className="header__menu-logo-link">
                                <img src="../images/main-company-logo.webp" alt="logo of the company" width="34" height="75" />
                            </NavLink>
                        </div>
                        <ul className="header__menu-list flex">
                            <li className="header__menu-item header__menu-item--home">
                                <NavLink end to="/" className="header__menu-link">Home</NavLink>
                            </li>
                            <li className="header__menu-item">
                                <NavLink end to="/catalog" className="header__menu-link">Catalog</NavLink>
                            </li>
                            <li className="header__menu-item">
                                <NavLink end to="/delivery" className="header__menu-link">Order and delivery</NavLink>
                            </li>                            
                            <li className="header__menu-item">
                                <NavLink end to="/about-us" className="header__menu-link">About us</NavLink>
                            </li>
                            <li className="header__menu-item">
                                <NavLink end to="/contacts" className="header__menu-link">Contacts</NavLink>
                            </li>                                
                            <li className="header__menu-item">
                                <NavLink end to="/faq" className="header__menu-link">FAQ</NavLink>
                            </li>
                            <li className="header__menu-item">
                                <NavLink end to="/clients" className="header__menu-link">For corporate clients</NavLink>
                            </li>                       
                        </ul>
                        <button className="header__mobile-btn" id="toggle">Menu</button>
                    </nav>

                    <Link className="header__phone" to="tel:+44171552948">
                        <span className="header__phone-img">
                            <img src="../images/order-phone-icon.svg" alt="phone icon" width="12" height="12" />
                        </span>
                        <span className="header__phone-link" >+44 171 552948</span>
                    </Link>
                    <Basket handleOpenOrderModal={handleOpenOrderModal}/>

                    <div className="header__mail">
                        <Link to="mailto:order@loverflower.com" className="header__mail-email menu-contacts">
                            order@loverflower.com
                        </Link>
                        <p className="header__mail-info menu-contacts-info">Delivery 24/7 by agreement with the operator</p>
                    </div>
                </div>              
            </div>              
        </header>
        { isOrderModalOpen && createPortal(<OrderPopup bouquets={bouquets}/>, document.querySelector('#portal-wrapper') ) }
        </>
    )
};

export default Header;