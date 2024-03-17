import React from 'react'; 
import { useState, useEffect } from 'react';

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
        <main className="main-page catalog-page page-margin">  
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
                                                <label className="catalog-top__categories-checkbox-block" id={id}>                            
                                                    <input className="catalog-top__categories-checkbox" type="checkbox" value={value} />
                                                    <span className="catalog-top__categories-lable">{name}</span>
                                                </label> 
                                            )
                                        })
                                    }
                                    {/* <label className="catalog-top__categories-checkbox-block">                            
                                        <input className="catalog-top__categories-checkbox" id="bouquets-with-camomiles" type="checkbox" value="bouquets-with-camomiles" />
                                        <span className="catalog-top__categories-lable">Bouquets with camomiles</span>
                                    </label>                            
                                    <label className="catalog-top__categories-checkbox-block">                          
                                        <input className="catalog-top__categories-checkbox" id="bouquets-of-chrysanthemums" type="checkbox" value="bouquets-of-chrysanthemums" />
                                        <span className="catalog-top__categories-lable">Bouquets of chrysanthemums</span>
                                    </label> 
                                    <label className="catalog-top__categories-checkbox-block">                          
                                        <input className="catalog-top__categories-checkbox" id="monobouquets" type="checkbox" value="monobouquets" />
                                        <span className="catalog-top__categories-lable">Monobouquets</span>
                                    </label> 
                                    <label className="catalog-top__categories-checkbox-block">                         
                                        <input className="catalog-top__categories-checkbox" id="prefabricated-bouquets" type="checkbox" value="prefabricated-bouquets" />
                                        <span className="catalog-top__categories-lable">Prefabricated bouquets</span>
                                    </label> 
                                    <label className="catalog-top__categories-checkbox-block">                            
                                        <input className="catalog-top__categories-checkbox" id="flower-arrangements" type="checkbox" value="flower-arrangements" />
                                        <span className="catalog-top__categories-lable">Flower arrangements</span>
                                    </label> 
                                    <label className="catalog-top__categories-checkbox-block">                          
                                        <input className="catalog-top__categories-checkbox" id="dried-flowers" type="checkbox" value="bouquets-of-dried-flowers" />
                                        <span className="catalog-top__categories-lable">Bouquets of dried flowers</span>
                                    </label> 
                                    <label className="catalog-top__categories-checkbox-block">  
                                        <input className="catalog-top__categories-checkbox" id="bouquets-of-roses" type="checkbox" value="bouquets-of-roses" />
                                        <span className="catalog-top__categories-lable">Bouquets of roses</span>
                                    </label> 
                                    <label className="catalog-top__categories-checkbox-block">                              
                                        <input className="catalog-top__categories-checkbox" id="popular" type="checkbox" value="popular" />
                                        <span className="catalog-top__categories-lable">Popular</span>
                                    </label>                                                   */}
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
                                                    <label className="catalog-details__inner-lable" for={value}>{name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                    {/* <div className="catalog-details__inner-checkbox-block">
                                        <input className="catalog-details__inner-checkbox" id="white" type="checkbox" value="white" />
                                        <label className="catalog-details__inner-lable" for="white">White</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">
                                        <input className="catalog-details__inner-checkbox" id="yellow" type="checkbox" value="yellow" />
                                        <label className="catalog-details__inner-lable" for="yellow">Yellow</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">
                                        <input className="catalog-details__inner-checkbox" id="green" type="checkbox" value="green" />
                                        <label className="catalog-details__inner-lable" for="green">Green</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">                
                                        <input className="catalog-details__inner-checkbox" id="red" type="checkbox" value="red" />
                                        <label className="catalog-details__inner-lable" for="red">Red</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">                
                                        <input className="catalog-details__inner-checkbox" id="orange" type="checkbox" value="orange" />
                                        <label className="catalog-details__inner-lable" for="orange">Orange</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">           
                                        <input className="catalog-details__inner-checkbox" id="pink" type="checkbox" value="pink" />
                                        <label className="catalog-details__inner-lable" for="pink">Pink</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">
                                        <input className="catalog-details__inner-checkbox" id="blue" type="checkbox" value="blue" />
                                        <label className="catalog-details__inner-lable" for="blue">Blue</label>
                                    </div> */}
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
                                    {/* <div className="catalog-details__inner-checkbox-block">                       
                                        <input className="catalog-details__inner-checkbox" id="bouquet" type="checkbox" value="bouquet" />
                                        <label className="catalog-details__inner-lable" for="bouquet">Bouquet</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">               
                                        <input className="catalog-details__inner-checkbox" id="in-vase" type="checkbox" value="vase" />
                                        <label className="catalog-details__inner-lable" for="in-vase">In vase</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">            
                                        <input className="catalog-details__inner-checkbox" id="in-envelope" type="checkbox" value="envelope" />
                                        <label className="catalog-details__inner-lable" for="in-envelope">In envelope</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">            
                                        <input className="catalog-details__inner-checkbox" id="in-basket" type="checkbox" value="basket" />
                                        <label className="catalog-details__inner-lable" for="in-basket">In basket</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">                
                                        <input className="catalog-details__inner-checkbox" id="in-box" type="checkbox" value="box" />
                                        <label className="catalog-details__inner-lable" for="in-box">In box</label>
                                    </div>                                                     */}
                                </div>
                                <div className="catalog-details__inner-price">
                                    <p className="catalog-details__inner-title green-text">
                                        Cost
                                    </p>  
                                    <div className="catalog-details__inner-checkbox-block">                         
                                        <input type="range" id="range-price" name="range-price" min="0" max="4000" />
                                        <label for="range-price">Price from £0 to £4000</label>
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
                                                    <label className="catalog-details__inner-lable" for="value">{name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                    {/* <div className="catalog-details__inner-checkbox-block">                           
                                        <input className="catalog-details__inner-checkbox" id="roses" type="checkbox" value="roses" />
                                        <label className="catalog-details__inner-lable" for="roses">Roses</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">
                                        <input className="catalog-details__inner-checkbox" id="camomiles" type="checkbox" value="camomole" />
                                        <label className="catalog-details__inner-lable" for="camomiles">Camomiles</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">                        
                                        <input className="catalog-details__inner-checkbox" id="chrysanthemum" type="checkbox" value="chrysanthemum" />
                                        <label className="catalog-details__inner-lable" for="chrysanthemum">Chrysanthemum</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">                        
                                        <input className="catalog-details__inner-checkbox" id="gladiolus" type="checkbox" value="gladiolus" />
                                        <label className="catalog-details__inner-lable" for="gladiolus">Gladiolus</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">
                                        <input className="catalog-details__inner-checkbox" id="tulip" type="checkbox" value="tulip" />
                                        <label className="catalog-details__inner-lable" for="tulip">Tulip</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">
                                        <input className="catalog-details__inner-checkbox" id="daffodils" type="checkbox" value="dafodils" />
                                        <label className="catalog-details__inner-lable" for="daffodils">Daffodils</label>
                                    </div>
                                    <div className="catalog-details__inner-checkbox-block">
                                        <input className="catalog-details__inner-checkbox" id="lavender" type="checkbox" value="lavender" />
                                        <label className="catalog-details__inner-lable" for="lavender">Lavender</label>
                                    </div>                                                                           */}
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
                                                <img src={imageSrc} alt={altSign} width="350" height="450" />
                                            </div>
                                            <h3 className="popular__inner-item-title common-subtitle">{name}</h3>
                                            <p className="popular__inner-item-price">{price}</p>
                                            <button className="popular__inner-item-btn common-btn">Add to the order</button>
                                        </div>
                                    )
                                })
                            }

                            {/* <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-2.webp" alt="bouquet with white rosesin blue cover" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">The angel's widgs</h3>
                                <p className="popular__inner-item-price">£74</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-3.webp" alt="bouquet with pink and white roses in the lightpink cover" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">The drops of heaven</h3>
                                <p className="popular__inner-item-price">£107</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-4.webp" alt="white gladioluses" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">Just great</h3>
                                <p className="popular__inner-item-price">£101</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-5.webp" alt="dark pink roses" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">The very best</h3>
                                <p className="popular__inner-item-price">£187</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-6.webp" alt="camomiles and different roses in the box" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">Various flowers</h3>
                                <p className="popular__inner-item-price">£125</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-7.webp" alt="bouquet with white and light pink roses" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">White flowers</h3>
                                <p className="popular__inner-item-price">£98</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-8.webp" alt="bouquet with pink lavander" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">Just fine</h3>
                                <p className="popular__inner-item-price">£112</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-9.webp" alt="bouquet with yellow and light violet gladioluses" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">The best</h3>
                                <p className="popular__inner-item-price">£88</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-10.webp" alt="bouquet with red roses in an envelope" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">Beautiful</h3>
                                <p className="popular__inner-item-price">£118</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-11.webp" alt="bouquet with yellow roses" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">Good day</h3>
                                <p className="popular__inner-item-price">£132</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div>

                            <div className="popular__inner-item">
                                <div className="popular__inner-item-image">
                                    <img src="images/catalog-image-12.webp" alt="bouquet with blue lavender" width="350" height="450" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">Fine day</h3>
                                <p className="popular__inner-item-price">£114</p>
                                <button className="popular__inner-item-btn common-btn">Add to the order</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </main> 
    )
};

export default Catalog;