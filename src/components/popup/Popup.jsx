import React from 'react';
import { Link } from 'react-router-dom';

import './Popup.scss';

const Popup = ({ handleOpenModal }) => {
    return (
        <div className="popup-wrapper">
            <div className="popup">
                <div className="popup__close-btn" onClick={() => handleOpenModal(false)}>
                    <img src="images/popup-close-btn.svg" alt="green close sign" width="30" height="30" />
                </div>
                <h1 className="popup__title chapter-subtitle">Order a call</h1>
                <div className="popup__green-block"></div>
                <p className="popup__info">
                    Enter your details and we will contact you. Your data will under no circumstances be passed on to third parties.
                </p>
                <form className="popup__form questions__form">
                    <input type="text" className="questions__form-name" placeholder="Your name" />
                    <input type="phone" className="questions__form-phone" placeholder="+44 171 77-77-77" />
                    <button type="submit" className="questions__form-btn colored-btn">Send</button>
                    <p className="questions__form-policy">
                        By clicking on the “Send” button, I consent to the processing of personal data in accordance with the <Link to="/policy">Privacy Policy</Link>.
                    </p>
                </form> 
            </div>
        </div>
    )
};

export default Popup;