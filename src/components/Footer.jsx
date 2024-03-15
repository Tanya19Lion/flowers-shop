import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top flex">                          
                    <div className="footer__logo">
                        <a href="">
                            <img src="images/main-company-logo.webp" alt="logo of the company" width="34" height="75" />
                        </a>
                    </div>
                    <nav className="footer__menu flex"> 
                        <ul className="footer__menu-list flex">
                            <li className="footer__menu-item header__menu-item--home">
                                <a href="" className="footer__menu-link">Home</a>
                            </li>
                            <li className="footer__menu-item"><a href="" className="footer__menu-link">Catalog</a></li>
                            <li className="footer__menu-item">
                                <a href="" className="footer__menu-link">Order and delivery</a>
                            </li>                            
                            <li className="footer__menu-item"><a href="" className="footer__menu-link">About us</a></li>
                            <li className="footer__menu-item">
                                <a href="" className="footer__menu-link">Contacts</a>
                            </li>                                
                            <li className="footer__menu-item"><a href="" className="footer__menu-link">FAQ</a></li>
                            <li className="footer__menu-item">
                                <a href="" className="footer__menu-link">For corporate clients</a>
                            </li>                       
                        </ul>
                    </nav>
                </div>
                <div className="footer-bottom flex">
                    <div className="footer-bottom__mail">
                        <a className="footer-bottom__mail-email menu-contacts" href="mailto:order@loverflower.com">
                            order@loverflower.com
                        </a>
                        <p className="footer-bottom__mail-info menu-contacts-info">Delivery 24/7 by agreement with the operator</p>
                    </div>
                    <div className="footer-bottom__address">
                        <p className="footer-bottom__address-street menu-contacts">221B Baker St, London NW1 6XE</p>
                        <p className="footer-bottom__address-info menu-contacts-info">10:00 to 21:00 seven days a week</p>
                    </div>
                    <div className="footer-bottom__phone">
                        <a className="footer-bottom__phone-number menu-contacts" href="tel:+44171552948">+44 171 552948</a>
                        <p className="footer-bottom__phone-info menu-contacts-info">Receiving calls 24 hours a day</p>
                    </div>
                </div>
                
            </div>             
        </footer>   
    )
};

export default Footer;

