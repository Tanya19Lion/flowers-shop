import { useNavigate } from 'react-router-dom';
import { useChangeHeaderColor } from '../../hooks/changeHeader.hook';

import './Page404.scss';

const Page404 = () => { 
    useChangeHeaderColor('#000000', '0px');

    let navigate = useNavigate();

    return (
        <main className="not-found-main"> 
            <div className='container'>
                <div className='not-found-main__numbers flex'>
                    <p className="not-found-main__number not-found-main__number--first">4</p>
                    <p className="not-found-main__number not-found-main__number--second">4</p>
                    <p className="not-found-main__number not-found-main__number--third">0</p>
                </div>
            </div>
            <div className="not-found-main__image">
                <img src="../images/404-top-left-image.webp" alt="blue flowers" width="1400" height="100%" />
            </div>
            <div className='container'>
                <div className="not-found-main__text bigger-text">
                    <p className="not-found-main__text-error">404 Error</p>
                    <p className="not-found-main__text-message">Oops...There is no such page</p>
                    <button onClick={() => navigate('/')} className="not-found-main__text-link green-text common-link-btn">To the main page</button>
                </div>
                <div className="not-found-main__sign">
                    <img src="../images/404-page-lover-flower.webp" alt="blue flowers" width="350" height="240" />
                </div>
            </div>
        </main> 
    )
}

export default Page404;




