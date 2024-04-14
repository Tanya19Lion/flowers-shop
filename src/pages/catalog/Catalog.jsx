import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initialFilters, useFilters } from '../../context/FiltersProvider';

import Portal from '../../components/portal/Portal';
import Basket from '../../components/basket/Basket';
import Popup from '../../components/popup/Popup';
import OrderPopup from '../../components/orderPopup/OrderPopup';
import OrderPhoneElement from '../../components/orderPhoneElement/OrderPhoneElement';
import CategoriesTop from '../../components/categoriesTop/CategoriesTop';
import CategoriesSort from '../../components/categoriesSort/CategoriesSort';
import CategoriesColours from '../../components/categoriesColours/CategoriesColours';
import CategoriesFormat from '../../components/categoriesFormat/CategoriesFormat';
import CategoryPrice from '../../components/categoryPrice/CategoryPrice';
import CategoriesFlowers from '../../components/categoriesFlowers/CategoriesFlowers';
import AllBouquets from '../../components/allBouquets/AllBouquets';

import './Catalog.scss';

import { openOrderModal } from '../../redux/actions/actions';

const Catalog = () => {
    const dispatch = useDispatch();
	const [scroll, setScroll] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const isOrderModalOpen = useSelector(state => state.order.isOrderModalOpen);

	useEffect(() => {		
		const pageHeader = document.querySelector('.header');
		pageHeader.style.backgroundColor = 'transparent';
		pageHeader.style.marginBottom = '50px';
		pageHeader.classList.add('header-with-basket');		

        window.scrollTo(0, 0);
	}, []);

    const handleScroll = () => {
		setScroll(window.scrollY);
	}

    if (document.querySelector('.header')) {
        scroll > 700 
            ? document.querySelector('.header').classList.remove('header-with-basket') 
            : document.querySelector('.header').classList.add('header-with-basket')
	}	

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

    const handleOpenModal = () => {
		setOpenModal(true);
	}

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
                            <OrderPhoneElement handleOpenModal={handleOpenModal}/>
                            <Basket handleOpenOrderModal={() => dispatch(openOrderModal())}/>
                        </div>
                    </div>                 
                </div>
            </section>

            { isOrderModalOpen && Portal(<OrderPopup/> ) }

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

            { openModal && Portal(<Popup handleOpenModal={setOpenModal}/>) }
        </main> 
    )
};

export default Catalog;