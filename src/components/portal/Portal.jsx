import { createPortal } from 'react-dom';

const Portal = (children, wrapperId = '#portal-wrapper') => {
    return createPortal(children, document.querySelector(wrapperId));
};

export default Portal;