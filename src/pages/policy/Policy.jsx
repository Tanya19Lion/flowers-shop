import { useChangeHeaderColor } from '../../hooks/changeHeader.hook';

import './Policy.scss';

const Policy = () => {

    useChangeHeaderColor('#000000', '100px');

    return (
        <main className="main-policy bigger-text page-margin"> 
            <section className="policy-title-block chapter-margin">
                <div className="container">
                    <div className="policy-title">
                        <h1 className="main-policy-title top-title">Privacy policy</h1>
                    </div> 
                </div>
            </section>
            
            <section className="policy-info">
                <div className="container">
                    <h2 className="policy-info__title pink-heading">What information do we collect?</h2>
                    <p className="policy-info__text">
                        We collect information from you when you register on our site, subscribe to our newsletter or fill out a form.
                    </p>
                    <p className="policy-info__text">
                        When making an order or registering on our site you may be asked to enter your name, e-mail address or phone number. 
                        You may also visit our site anonymously.
                    </p>
                    <p className="policy-info__text">
                        We collect information from you when you register on our site, subscribe to our newsletter or fill out a form.
                    </p>
                    <p className="policy-info__text chapter-margin">
                        We may collect any Personal Information that you choose to send to us or provide to us, for example, on our online form or if you request us to contact you. 
                    </p>
                    <h2 className="policy-info__title pink-heading">What do we use your information for?</h2>
                    <p className="policy-info__text green-text">Any information we collect from you may be used:</p>
                    <ul className="policy-info__list main-block">
                        <li className="policy-info__list-item">
                            to personalize your experience (your information helps us to better respond to your individual needs);
                        </li>
                        <li className="policy-info__list-item">
                            to improve our website (we continually strive to improve our website offers based on the information and feedback we receive from you);
                        </li>
                        <li className="policy-info__list-item">
                            to improve customer service (your information helps us to respond more effectively to your requests and support your needs);
                        </li>
                        <li className="policy-info__list-item">
                            to administer a contest, promotion, survey or other site feature;
                        </li>
                        <li className="policy-info__list-item">
                            to send periodic emails.
                        </li>                            
                    </ul>
                    <p className="policy-info__text">
                        The email address you provide to process an order may be used to send you information and updates pertaining to the order in addition to receiving occasional company news, updates, related product or service information, etc.
                    </p>
                    <p className="policy-info__text">
                        <span className="green-text">Note:</span> If at any time you would like to unsubscribe from future emails we include detailed instructions how to do it at the bottom of each email.
                    </p>                
                </div>
            </section>
        </main> 
    )
};

export default Policy;