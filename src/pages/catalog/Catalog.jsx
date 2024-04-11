import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { initialFilters, useFilters } from '../../context/FiltersProvider';

import Basket from '../../components/basket/Basket';
import CategoriesTop from '../../components/categoriesTop/CategoriesTop';
import CategoriesSort from '../../components/categoriesSort/CategoriesSort';
import CategoriesColours from '../../components/categoriesColours/CategoriesColours';
import CategoriesFormat from '../../components/categoriesFormat/CategoriesFormat';
import CategoryPrice from '../../components/categoryPrice/CategoryPrice';
import CategoriesFlowers from '../../components/categoriesFlowers/CategoriesFlowers';
import AllBouquets from '../../components/allBouquets/AllBouquets';

import './Catalog.scss';

const Catalog = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {		
		const pageHeader = document.querySelector('.header');
		pageHeader.style.backgroundColor = 'transparent';
		pageHeader.style.marginBottom = '50px';
		pageHeader.classList.add('header-with-basket');		
	}, []);

    const handleScroll = () => {
		setScroll(window.scrollY);
	}

	{ scroll > ( document.documentElement.clientHeight - 200 ) 
		? document.querySelector('.header').classList.remove('header-with-basket') 
		: document.querySelector('.header').classList.add('header-with-basket')
	}	

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

    const { setFilters } = useFilters();

    return (
        <main className="catalog-page page-margin">
            <section className="catalog-top"> 
                <div className="container">         
                    <div className="catalog-top__inner flex">
                        <div className="catalog-top__inner-main-info main-block">
                            <h1 className="catalog-top-title top-title">
                                <p className="catalog-top-title__first-part">Catalog</p>
                                <p className="catalog-top-title__second-part">of bouquets</p>
                            </h1>
                            <p className="catalog-top__slogan">
                                In out store you will find the largest selection of flowers for any event of your life
                            </p>
                            <CategoriesTop />
                        </div>
                        <div className="top-info__right-block">
                            <div className="top-info__right-block-phone">
                                <Link to="tel:+44171552948" className="top-info__right-block-link">+44 171 552948</Link>
                            </div>
                            <a className="top-info__right-block-text main-block">
                                <span className="top-info__right-block-img">
                                    <img src="images/order-phone-icon.svg" alt="phone icon" width="12" height="12" />
                                </span>
                                Order the call
                            </a>
                            <Basket />
                        </div>
                    </div>                 
                </div>
            </section>

            <CategoriesSort />

            <section className="catalog-details"> 
                <div className="container">
                    <div className="catalog-details__inner">
                        <div className="catalog-details__inner-filters">
                            <div className="catalog-details__inner-filters-block main-block">
                                <CategoriesColours />
                                <CategoriesFormat />
                                <CategoryPrice />
                                <CategoriesFlowers />
                                <button className="catalog-details__inner-btn common-btn" onClick={() => setFilters(initialFilters)}>Reset filters</button>
                            </div>
                        </div>
                        <AllBouquets />
                    </div>
                </div>
            </section>

        </main> 
    )
};

export default Catalog;