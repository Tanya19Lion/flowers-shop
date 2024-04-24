import { useChangeHeader } from '../../hooks/changeHeader.hook';

import './AboutUs.scss';

const AboutUs = () => { 
    useChangeHeader('#000000', '100px');

    return (
        <main className="about-us-main page-margin"> 
            <section className="about-us-main-title-block chapter-margin">
                <div className="container">
                    <h1 className="about-us-main-title top-title">ABOUT US</h1>
                </div>
            </section>

            <section className="about-us-info chapter-margin">
                <div className="container">
                    <div className="about-us-info__title top-subtitle green-text">
                        <p className="about-us-info__title-first-part">Lover</p>
                        <p className="about-us-info__title-second-part">Flower</p>
                    </div>
                    <div className="about-us-info__team bigger-text main-block chapter-margin">
                        <p className="about-us-info__team-values">
                            A young team of different people with the same values.
                        </p>
                        <p className="about-us-info__team-quality">
                            We believe that quality enjoyment lasts longer than pleasure
                            from low price. And that’s why we invested everything in the creation of our bouqueteria,
                            what we have: soul, heart, time and dreams! We are ready to promise you only what we can deliver. And we make only the highest quality, most interesting
                            and definitely unique. We are always honest with our clients in everything -
                            our catalog contains only those bouquets that you can actually buy.
                        </p>
                    </div>
                    <p className="about-us-info__title top-subtitle about-us-info__title--second green-text">                        
                        Guarantees
                    </p>
                    <p className="about-us-info__guarantees bigger-text chapter-margin">
                        Each flower is unique and so that you can be sure of the quality, we will send you a photo of your bouquet before sending it to the recipient. 
                        All information you provide is confidential and will be known only to us and the courier for delivery.
                    </p>
                    <p className="about-us-info__title top-subtitle about-us-info__title--third green-text">                        
                        Ordering bouquets on the Lower Flower company website means:
                    </p>
                    <ul className="about-us-info__list bigger-text page-margin">
                        <li className="about-us-info__list-item">choice of shades and varieties of flowers at any time of the year;</li>
                        <li className="about-us-info__list-item">sending a photo of the finished composition before sending;</li>
                        <li className="about-us-info__list-item">the ability to order flowers with delivery within an hour;</li>
                        <li className="about-us-info__list-item">favorable prices - on the website only those options that you can buy;</li>
                        <li className="about-us-info__list-item">complete confidentiality upon request;</li>
                        <li className="about-us-info__list-item">we select a postcard, balloons, a gift according to your wishes;</li>
                        <li className="about-us-info__list-item">in our cozy flower shop there are flowers that are pleasant to give.</li>
                    </ul>
                </div>
            </section>

            <section className="about-us-harmony">
                <div className="container">
                    <p className="about-us-harmony__info top-subtitle">
                        Natural harmony of color, uniqueness of buds and your feelings in tender petals will not leave anyone indifferent.
                    </p>
                    <p className="about-us-harmony__surprise bigger-text">
                        You choose and order a flower surprise, and we put our soul into it!
                    </p>
                </div>
            </section>

        </main> 
    )
};

export default AboutUs;