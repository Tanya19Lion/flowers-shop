import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page404 = () => { 
    return (
        <>
            <Header />
            {/* <header className="header header-not-found">                           */}           

            <main className="not-found-main"> 
                <p className="not-found-main__number not-found-main__number--first">4</p>
                <p className="not-found-main__number not-found-main__number--second">4</p>
                <p className="not-found-main__number not-found-main__number--third">0</p>
                <div className="not-found-main__image">
                    <img src="images/404-top-left-image.webp" alt="blue flowers" width="1400" height="100%" />
                </div>
                <div className="not-found-main__text">
                <p className="not-found-main__text-error">404 Error</p>
                <p className="not-found-main__text-message">Oops...There is no such page</p>
                <a className="not-found-main__text-link green-text" href="#">To the main page</a>
                </div>
                <div className="not-found-main__sign">
                    <img src="images/404-page-lover-flower.webp" alt="blue flowers" width="350" height="240" />
                </div>
            </main> 

            <Footer />      
        </>
    )
}


export default Page404;




