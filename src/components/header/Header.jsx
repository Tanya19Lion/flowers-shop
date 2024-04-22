import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Header.scss';

import Portal from '../portal/Portal';
import Basket from '../basket/Basket';
import OrderPopup from '../orderPopup/OrderPopup';
import Popup from '../popup/Popup';

import { openOrderModal } from '../../redux/actions/actions';
import { selectOrderModalOpen } from '../../redux/selectors/selectors';

const classNames = require('classnames');

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [openPhoneModal, setOpenPhoneModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isOrderModalOpen = useSelector(selectOrderModalOpen);

    openPhoneModal || isOrderModalOpen 
        ? document.body.classList.add('lock')
        : document.body.classList.remove('lock')

    const headerMobileClass = classNames({
        'header__menu': true,
        'open': mobileMenuOpen
    });
    const headerWrapperClass = classNames({
        'header-mobile__wrapper': true,
        'show': mobileMenuOpen
    });
    const mobileBtnClass = classNames({
        'header__mobile-btn': true,
        'active': !mobileMenuOpen
    });
    const mobileCloseBtnClass = classNames({
        'header-mobile__close-btn': true,
        'active': mobileMenuOpen
    });    

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);
        
    return (
        <>
            <header className="header">          
                <div className="container">
                    <div className="header-top flex">
                        <nav className="header__menu flex">           
                            <div className="header__menu-logo">
                                <NavLink end to="/" className="header__menu-logo-link">
                                    <img src="../images/main-company-logo.webp" alt="logo of the company" width="34" height="75" />
                                </NavLink>
                            </div>
                            <ul className="header__menu-list flex">
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
                        </nav>

                        <div className='header__mail'>
                            <Link to="mailto:order@loverflower.com" className="header__mail-email menu-contacts">
                                order@loverflower.com
                            </Link>
                            <p className="header__mail-info menu-contacts-info">Delivery 24/7 by agreement with the operator</p>
                        </div>

                        <button className="header__phone" onClick={() => setOpenPhoneModal(true)}>
                            <span className="header__phone-img">
                                <img src="../images/order-phone-icon.svg" alt="phone icon" width="12" height="12" />
                            </span>
                            <span className="header__phone-link">+44 171 552948</span>
                        </button>                        
                        <Basket handleOpenOrderModal={() => dispatch(openOrderModal())}/>
                    </div>  

                    <div className="header-mobile">
                        <button className={mobileBtnClass} onClick={() => setMobileMenuOpen(true)}>Menu</button>   
                        <div className={headerWrapperClass}>
                            <nav className={headerMobileClass}>            
                                <div className="header__menu-logo">
                                    <NavLink end to="/" className="header__menu-logo-link">
                                        <img src="../images/main-company-logo.webp" alt="logo of the company" width="22" height="48" />
                                    </NavLink>
                                </div>
                                <ul className="header__menu-list">
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
                            </nav>
                            <div className='header-mobile__grey-block'></div>
                            <div className='header__mail'>
                                <Link to="mailto:order@loverflower.com" className="header__mail-email menu-contacts">
                                    order@loverflower.com
                                </Link>
                                <p className="header__mail-info menu-contacts-info">Delivery 24/7 by agreement with the operator</p>
                            </div>
                            <div className="header__address">
                                <p className="top-info__address-street menu-contacts">221B Baker St, London NW1 6XE</p>
                                <p className="top-info__address-about menu-contacts-info">10:00 to 21:00 seven days a week</p>
                            </div>
                            <button className="header__phone" onClick={() => setOpenPhoneModal(true)}>
                                <span className="header__phone-img">
                                    <img src="../images/order-phone-icon.svg" alt="phone icon" width="12" height="12" />
                                </span>
                                <span className="header__phone-link">+44 171 552948</span>
                            </button>
                            <div className={mobileCloseBtnClass} onClick={() => setMobileMenuOpen(false)}>
                                <img src="../images/popup-close-btn.svg" alt="green close sign" width="30" height="30" />
                            </div>
                        </div>
                        <Basket handleOpenOrderModal={() => dispatch(openOrderModal())}/>
                        <p className='header-mobile__title'>Lower <br /> flower</p>
                    </div>                        
                </div>              
            </header>

            { isOrderModalOpen && Portal(<OrderPopup/>) }
            { openPhoneModal && Portal(<Popup handleOpenModal={setOpenPhoneModal}/> ) }
        </>
    )
};

export default Header;