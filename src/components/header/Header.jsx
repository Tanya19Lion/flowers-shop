import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './Header.scss';

const Header = () => {
    return (
        <header className="header">       	{/* <header className="header header-main-page">  */}    {/* <header className="header header-not-found">        */}             
            <div className="container">
                <div className="header-top flex">
                    <nav className="header__menu flex">           
                        <div className="header__menu-logo">
                            <NavLink end to="/" className="header__menu-logo-link">
                                <img src="images/main-company-logo.webp" alt="logo of the company" width="34" height="75" />
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
                    {/* <!-- <div className="header__phone"><a href="tel:+44171552948">+44 171 552948</a></div> -->
                    <!-- <div className="header__basket">
                        <img src="images/basket-icon.svg" alt="basket icon" width="30" height="30">
                    </div> --> */}
                    <div className="header__mail">
                        <Link to="mailto:order@loverflower.com" className="header__mail-email menu-contacts">
                            order@loverflower.com
                        </Link>
                        <p className="header__mail-info menu-contacts-info">Delivery 24/7 by agreement with the operator</p>
                    </div>
                </div>
                {/* <!-- <div className="header-middle">
                    <p className="header-address menu-contacts">221B Baker St, London NW1 6XE</p>
                    <p className="header-address-info menu-contacts-info">10:00 to 21:00<br>seven days a week</p>
                </div> --> */}
            </div>             
        </header>
    )
};

export default Header;