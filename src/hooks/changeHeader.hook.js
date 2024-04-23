import { useEffect } from 'react';

export const useChangeHeaderColor = (color, marginBottom, additionalHeaderClass = '', additionalMobileClass = '') => {

    useEffect(() => {		
		const pageHeader = document.querySelector('.header');
        const pageTopHeader = document.querySelector('.header-top');
        const pageMobileHeader = document.querySelector('.header-mobile__title');
		pageHeader.style.backgroundColor = color;
		pageHeader.style.marginBottom = marginBottom;

        additionalHeaderClass === 'header-with-basket' 
            ? pageTopHeader.classList.add('header-with-basket') 
            : pageTopHeader.classList.remove('header-with-basket');

        additionalMobileClass === 'show-mobile-title' 
            ? pageMobileHeader.classList.add('show-mobile-title')
            : pageMobileHeader.classList.remove('show-mobile-title');

        window.scrollTo(0, 0);
	}, []);
}

