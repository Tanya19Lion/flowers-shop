import React from 'react';

const Header = () => {
    return (
        <header className="header">                          
            <div className="container">
                <div className="header-top flex">
                    <nav className="header__menu flex">           
                        <div className="header__menu-logo">
                            <a href="!#">
                                <img src="images/main-company-logo.webp" alt="logo of the company" width="34" height="75" />
                            </a>
                        </div>
                        <ul className="header__menu-list flex">
                            <li className="header__menu-item header__menu-item--home">
                                <a href="#" className="header__menu-link">Home</a>
                            </li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">Catalog</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">Order and delivery</a></li>                            
                            <li className="header__menu-item"><a href="#" className="header__menu-link">About us</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">Contacts</a></li>                                
                            <li className="header__menu-item"><a href="#" className="header__menu-link">FAQ</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">For corporate clients</a></li>                       
                        </ul>
                        <button className="header__mobile-btn" id="toggle">Menu</button>
                    </nav>
                    {/* <!-- <div className="header__phone"><a href="tel:+44171552948">+44 171 552948</a></div> -->
                    <!-- <div className="header__basket">
                        <img src="images/basket-icon.svg" alt="basket icon" width="30" height="30">
                    </div> --> */}
                    <div className="header__mail">
                        <a href="mailto:order@loverflower.com" className="header__mail-email menu-contacts">
                            order@loverflower.com
                        </a>
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