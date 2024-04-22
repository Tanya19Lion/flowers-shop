import { useEffect } from 'react';

export const useChangeHeaderColor = (color, marginBottom, additionalHeaderClass = '') => {

    useEffect(() => {		
		const pageHeader = document.querySelector('.header');
        const pageTopHeader = document.querySelector('.header-top');
		pageHeader.style.backgroundColor = color;
		pageHeader.style.marginBottom = marginBottom;

        additionalHeaderClass === 'header-with-basket' 
            ? pageTopHeader.classList.add('header-with-basket') 
            : pageTopHeader.classList.remove('header-with-basket');

        window.scrollTo(0, 0);
	}, []);
}

