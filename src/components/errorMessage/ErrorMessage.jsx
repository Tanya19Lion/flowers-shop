import React from 'react';
import errorImage from './error-picture.webp';

import './ErrorMessage.scss';

const ErrorMessage = () => {
    return (
        <div className="error-block bigger-text flex">
            <img className="error-block__img" src={errorImage} alt="a delivery man drops flowers" width='300' height='300'/>
            <div className="error-block__text">
                <p className="error-block__info">
                    We're sorry, but it seems like something unexpected happened.
                </p>
                <p className="error-block__info">
                    Our team has been notified of the issue, and we're working hard to fix it as soon as possible.
                </p>
                <p className="error-block__info">
                    In the meantime, please try refreshing the page or come back later.
                </p>                
            </div>
        </div>
    )

};

export default ErrorMessage;
