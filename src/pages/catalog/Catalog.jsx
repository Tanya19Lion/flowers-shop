import React from 'react'; 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Catalog.scss';

import useFlowersService from '../../services/FlowersService';

const Catalog = () => {
    const { loadingStatus, getCategoriesTop,  getCategoriesColours, getCategoriesFormat, getCategoriesFlowers, getAllBouquets } = useFlowersService();

    const [topCategories, setTopCategories] = useState([]);
    const [coloursCategories, setColoursCategories] = useState([]);
    const [formatCategories, setFormatCategories] = useState([]);
    const [flowersCategories, setFlowersCategories] = useState([]);
    const [allBouquets, setAllBouquets] = useState([]);

    useEffect(() => {
        getCategoriesTop().then(result => setTopCategories(result));
    }, []);

    useEffect(() => {
        getCategoriesColours().then(result => setColoursCategories(result));
    }, []);

    useEffect(() => {
        getCategoriesFormat().then(result => setFormatCategories(result));
    }, []);

    useEffect(() => {
        getCategoriesFlowers().then(result => setFlowersCategories(result));
    }, []);

    useEffect(() => {
        getAllBouquets().then(data => setAllBouquets(data));
    }, [])

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
                            <div className="catalog-top__categories">
                                <button className="catalog-top__categories-btn">Categories</button>
                                <div className="catalog-top__categories-block flex">    
                                    {
                                        topCategories.map(item => {
                                            const { id, name, value } = item;
                                            return (
                                                <label className="catalog-top__categories-checkbox-block" id={id * id}>                            
                                                    <input className="catalog-top__categories-checkbox" type="checkbox" value={value} />
                                                    <span className="catalog-top__categories-lable">{name}</span>
                                                </label> 
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="top-info__right-block">
                            <div className="top-info__right-block-phone">
                                <a href="tel:+44171552948" className="top-info__right-block-link">+44 171 552948</a>
                            </div>
                            <a className="top-info__right-block-text main-block">
                                <span className="top-info__right-block-img">
                                    <img src="images/order-phone-icon.svg" alt="phone icon" width="12" height="12" />
                                </span>
                                Order the call
                            </a>
                            <div className="top-info__right-block-basket main-block">
                                <img src="images/basket-icon.svg" alt="basket icon" width="30" height="30" />
                            </div>
                        </div>
                    </div>                 
                </div>
            </section>

            <section className="catalog-sort"> 
                <div className="container">     
                    <div className="catalog-sort__select-block">
                        <select className="catalog-sort__select main-block">
                            <option className="catalog-sort__select-item catalog-sort__select-item--first" name="sort-by" value="sort-by" selected disabled>Sort by</option>
                            <option className="catalog-sort__select-item" name="popularity" value="popularity">Popularity</option>
                            <option className="catalog-sort__select-item" name="cheap-first" value="cheap-first">Cheap bouquets first</option>
                            <option className="catalog-sort__select-item" name="expensive-first" value="expensive-first">Expensive bouquets first</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* <!-- <section className="catalog-sort"> 
                <div className="container">     
                    <div className="catalog-sort__block">
                        <button className="catalog-sort__block-btn">Sort by</button>

                        <ul className="catalog-sort__list">
                            <li className="catalog-sort__list-item" data-value="popularity">Popularity</li>
                            <li className="catalog-sort__list-item" data-value="cheap-first">Cheap bouquets first</li>
                            <li className="catalog-sort__list-item" data-value="expensive-first">Expensive bouquets first</li>
                        </ul>
                    </div>
                </div>
            </section> --> */}

            <section className="catalog-details"> 
                <div className="container">
                    <div className="catalog-details__inner">
                        <div className="catalog-details__inner-filters">
                            <div className="catalog-details__inner-filters-block main-block">
                                <div className="catalog-details__inner-colours">
                                    <p className="catalog-details__inner-title green-text">
                                        By colour
                                    </p>
                                    {
                                        coloursCategories.map(item => {
                                            const { id, name, value } = item;
                                            return (
                                                <div className="catalog-details__inner-checkbox-block" key={id}>
                                                    <input className="catalog-details__inner-checkbox" id={value} type="checkbox" value={value} />
                                                    <label className="catalog-details__inner-lable" htmlFor={value}>{name}</label>
                                                </div>
                                            )
                                        })
                                    }                                    
                                </div>
                                <div className="catalog-details__inner-format">
                                    <p className="catalog-details__inner-title green-text">
                                        By format
                                    </p>     
                                    {
                                        formatCategories.map(item => {
                                            const { id, name, value } = item;
                                            return (
                                                <div className="catalog-details__inner-checkbox-block" id={id}>                       
                                                    <input className="catalog-details__inner-checkbox" id={value} type="checkbox" value={value} />
                                                    <label className="catalog-details__inner-lable" value={value}>{name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="catalog-details__inner-price">
                                    <p className="catalog-details__inner-title green-text">
                                        Cost
                                    </p>  
                                    <div className="catalog-details__inner-checkbox-block">                         
                                        <input type="range" id="range-price" name="range-price" min="0" max="4000" />
                                        <label htmlFor="range-price">Price from £0 to £4000</label>
                                    </div>                                                 
                                </div>

                                <div className="catalog-details__inner-price">
                                    <p className="catalog-details__inner-title green-text">
                                        By flowers
                                    </p> 
                                    {
                                        flowersCategories.map(item => {
                                            const { id, name, value } = item;
                                            return (
                                                <div className="catalog-details__inner-checkbox-block" key={id}>                           
                                                    <input className="catalog-details__inner-checkbox" id={value} type="checkbox" value={value} />
                                                    <label className="catalog-details__inner-lable" htmlFor="value">{name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <button className="catalog-details__inner-btn common-btn">Reset filters</button>
                            </div>
                        </div>
                        <div className="catalog-details__inner-items flex">
                            {
                                allBouquets.map(item => {
                                    const { id, name, price, imageSrc, altSign } = item;
                                    return (
                                        <div className="popular__inner-item" key={id}>
                                            <div className="popular__inner-item-image">
                                                <img src={imageSrc} alt={altSign} width="255" height="255" />
                                            </div>
                                            <h3 className="popular__inner-item-title common-subtitle">{name}</h3>
                                            <p className="popular__inner-item-price">{price}</p>
                                            <Link to={`./${id}`} className="popular__inner-item-btn common-btn">Check more</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </main> 
    )
};

export default Catalog;