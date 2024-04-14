import { useEffect } from 'react';

export const useChangeHeaderColor = (color, marginBottom, additionalHeaderClass = '') => {

    useEffect(() => {		
		const pageHeader = document.querySelector('.header');
		pageHeader.style.backgroundColor = color;
		pageHeader.style.marginBottom = marginBottom;

        additionalHeaderClass === 'header-with-basket' 
            ? pageHeader.classList.add('header-with-basket') 
            : pageHeader.classList.remove('header-with-basket');

        window.scrollTo(0, 0);
	}, []);
}

