import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scroll, setScroll] = useState(0);
    const pageHeader = document.querySelector('.header');
    const pageTopHeader = document.querySelector('.header-top');
    const pageMobileHeader = document.querySelector('.header-mobile__title');

    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    if (pageHeader) {
        scroll > 60 
            ? pageHeader.style.backdropFilter = 'blur(20px)'
            : pageHeader.style.backdropFilter = 'unset';
    }

    if (pageTopHeader) {
        scroll > 700
            ? pageTopHeader.classList.remove('header-with-basket') 
            : pageTopHeader.classList.add('header-with-basket');
    }

    if (pageMobileHeader) {
        scroll > 200
            ? pageMobileHeader.classList.remove('show-mobile-title') 
            : pageMobileHeader.classList.add('show-mobile-title');
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}

