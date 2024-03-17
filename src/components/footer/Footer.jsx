import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top flex">                          
                    <div className="footer__logo">
                        <NavLink to="/">
                            <img src="images/main-company-logo.webp" alt="logo of the company" width="34" height="75" />
                        </NavLink>
                    </div>
                    <nav className="footer__menu flex"> 
                        <ul className="footer__menu-list flex">
                            <li className="footer__menu-item header__menu-item--home">
                                <NavLink end to="/" className="footer__menu-link">Home</NavLink>
                            </li>
                            <li className="footer__menu-item">
                                <NavLink end to="/catalog" className="footer__menu-link">Catalog</NavLink>
                            </li>
                            <li className="footer__menu-item">
                                <NavLink end to="/delivery" className="footer__menu-link">Order and delivery</NavLink>
                            </li>                            
                            <li className="footer__menu-item">
                                <NavLink end to="/about-us" className="footer__menu-link">About us</NavLink>
                            </li>
                            <li className="footer__menu-item">
                                <NavLink end to="/contacts" className="footer__menu-link">Contacts</NavLink>
                            </li>                                
                            <li className="footer__menu-item">
                                <NavLink end to="/faq" className="footer__menu-link">FAQ</NavLink>
                            </li>
                            <li className="footer__menu-item">
                                <NavLink end to="/clients" className="footer__menu-link">For corporate clients</NavLink>
                            </li>                       
                        </ul>
                    </nav>
                </div>
                <div className="footer-bottom flex">
                    <div className="footer-bottom__mail">
                        <Link className="footer-bottom__mail-email menu-contacts" to="mailto:order@loverflower.com">
                            order@loverflower.com
                        </Link>
                        <p className="footer-bottom__mail-info menu-contacts-info">Delivery 24/7 by agreement with the operator</p>
                    </div>
                    <div className="footer-bottom__address">
                        <p className="footer-bottom__address-street menu-contacts">221B Baker St, London NW1 6XE</p>
                        <p className="footer-bottom__address-info menu-contacts-info">10:00 to 21:00 seven days a week</p>
                    </div>
                    <div className="footer-bottom__phone">
                        <Link className="footer-bottom__phone-number menu-contacts" to="tel:+44171552948">+44 171 552948</Link>
                        <p className="footer-bottom__phone-info menu-contacts-info">Receiving calls 24 hours a day</p>
                    </div>
                </div>
                
            </div>             
        </footer>   
    )
};

export default Footer;

