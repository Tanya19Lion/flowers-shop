import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scroll, setScroll] = useState(0);
    const pageHeader = document.querySelector('.header');

    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    if (pageHeader) {
        scroll > 700
        ? pageHeader.classList.remove('header-with-basket') 
        : pageHeader.classList.add('header-with-basket')
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}

