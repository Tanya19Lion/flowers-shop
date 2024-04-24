import { useChangeHeader } from '../../hooks/changeHeader.hook';
import { Link } from 'react-router-dom';

import './FinalPage.scss';

const FinalPage = () => {
    useChangeHeader('#000000', '0px');

    return (
        <main className="final-page bigger-text"> 
            <div className="container">
                <div className="final-page__block flex page-margin">
                    <h1 className="final-page__title top-title ">Thanks for watching</h1>
                    <img className="final-page__image" src='images/payment-lover-flower.webp' alt='lower flower text' width='245' height='180' />              
                </div>
                
                <Link to='/catalog' className="final-page__btn common-link-btn">Back to catalog</Link>       

            </div>
        </main> 
    )
}

export default FinalPage;