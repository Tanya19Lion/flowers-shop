import React from 'react';
import { Link } from 'react-router-dom';

import Slider from "react-slick";

import './SimpleSlider.scss';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
            ...style, 
            display: "block", 
            background: "transparent", 
            backgroundImage: "url(../images/pink-arrow-right.svg",
            backgroundPosition: "center",
            backgroundSize: "contein",
            backgroundRepeat: "no-repeat",
            width: "40px",
            height: "5px",
            padding: "10px"
        }}
        onClick={onClick}
      />
    );
}
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
            ...style, 
            display: "block", 
            background: "transparent", 
            backgroundImage: "url(../images/pink-arrow-right.svg)",
            backgroundPosition: "center",
            backgroundSize: "contein",
            backgroundRepeat: "no-repeat",
            transform: "rotate(180deg)",
            width: "40px",
            height: "5px",
            padding: "10px"
        }}
        onClick={onClick}
      />
    );
}

export default function SimpleSlider({ bouquets }) {  

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centralMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                { bouquets
                    .filter(item => item.categories.includes('popular'))
                    .map(item => {
                        const { id, name, price, imageSrc, altSign } = item;
                        return (
                            <div className="popular__inner-item" key={id}>
                                <div className="popular__inner-item-image">
                                    <img src={imageSrc} alt={altSign} width="350" height="350" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">{name}</h3>
                                <p className="popular__inner-item-price">£{price}</p>
                                <Link to={`catalog/${id}`} className="popular__inner-item-btn common-btn">Check more</Link>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}