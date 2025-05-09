import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useChangeHeader } from '../../hooks/changeHeader.hook';
import { useScroll } from '../../hooks/handleScroll.hook';

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
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';

import { lowLimitChange, highLimitChange, activeFlowersCategoryChange, activeFormatCategoryChange, activeColorCategoryChange, resetAllFilters } from '../../redux/slices/categoriesSlice';
import { orderModalOpen } from '../../redux/slices/orderSlice';
import { selectOrderModalOpen } from '../../redux/selectors/selectors';

import './Catalog.scss';

const classNames = require('classnames');   

const Catalog = () => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const isOrderModalOpen = useSelector(selectOrderModalOpen);

    const [topCategoriesOpen, setTopCategoriesOpen] = useState(false); 
    const [filtersOpen, setFiltersOpen] = useState(false); 

    const topCategoriesBlockClasses = classNames({
		'catalog-top__categories-block flex': true,
		'open': topCategoriesOpen
	});

    const filtersBlockClasses = classNames({
		'catalog-details__inner-filters-block main-block': true,
		'open': filtersOpen
	});

    const resetSidebarFilters = () => {
        dispatch(lowLimitChange(0));
        dispatch(highLimitChange(4000));
        dispatch(activeFlowersCategoryChange('all'));
        dispatch(activeFormatCategoryChange('all'));
        dispatch(activeColorCategoryChange('all'));
        dispatch(resetAllFilters());
    }

    useChangeHeader('transparent', '50px', 'header-with-basket', 'show-mobile-title');
    useScroll();

    const handleOpenModal = () => {
		setOpenModal(true);
	}

    openModal || isOrderModalOpen 
        ? document.body.classList.add('lock')
        : document.body.classList.remove('lock')

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
                            <button 
                                className="catalog-top__categories-btn select-btn main-block"
                                onClick={() => setTopCategoriesOpen(!topCategoriesOpen)}
                            >Categories</button>
                            <ErrorBoundary>
                                <CategoriesTop topCategoriesBlockClasses={topCategoriesBlockClasses}/>
                            </ErrorBoundary>
                        </div>
                        <div className="top-info__right-block">
                            <div className="top-info__right-block-phone">
                                <Link to="tel:+44171552948" className="top-info__right-block-link">+44 171 552948</Link>
                            </div>
                            <OrderPhoneElement handleOpenModal={handleOpenModal}/>
                            <Basket handleOpenOrderModal={() => dispatch(orderModalOpen())}/>
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
                            <button 
                                className="catalog-details__inner-filters-btn select-btn main-block"
                                onClick={() => setFiltersOpen(!filtersOpen)}
                            >Filters</button>

                            <div className={filtersBlockClasses}>
                                <ErrorBoundary>
                                    <CategoriesColours />
                                </ErrorBoundary>
 
                                <ErrorBoundary>
                                    <CategoriesFormat />
                                </ErrorBoundary>

                                <CategoryPrice />
            
                                <ErrorBoundary>
                                    <CategoriesFlowers />
                                </ErrorBoundary>

                                <button className="catalog-details__inner-btn common-btn" onClick={() => resetSidebarFilters()}>Reset filters</button>
                            </div>
                        </div>
                        <ErrorBoundary>
                            <AllBouquets />
                        </ErrorBoundary>
                    </div>
                </div>
            </section>

            { openModal && Portal(<Popup handleOpenModal={setOpenModal}/>) }
        </main> 
    )
};

export default Catalog;