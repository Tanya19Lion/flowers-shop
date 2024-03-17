import React from 'react';

const FAQ = () => {
    return (
        <main className="faq-main"> 
            <div className="faq-main-title-block">
                <div className="container">
                    <div className="faq-main-block flex">
                        <div className="faq-green-block"></div>
                        <h1 className="faq-main-title top-title">FAQ</h1> 
                    </div>
                </div>
            </div>               
            
            <div className="nav bigger-text">
                <div className="container">
                    <div className="nav-item">
                        <a href="#image" className="nav-link green-text">WILL THE ORDERED BOUQUET EXACTLY CORRESPOND TO ITS PICTURE ON THE SITE?</a>
                        <div id="image" className="nav-submenu">
                            The bouquet is assembled according to an individual bouquet matrix. 
                            However, there may be cases when the required colors are not available or the available flowers differ from those shown in the photo, and with the approval of the customer they can be replaced with similar ones. 
                            Or, if the florist believes that these changes will not lead to a significant change in the image of the bouquet, then he can replace some of the flowers himself. 
                            And before sending, the photo is sent to the customer, who approves the resulting bouquet. 
                            Each flower is different from the other, just as each bouquet will be individual, but this is its charm... individuality.
                        </div>
                    </div>
                    <div className="nav-item">
                        <a href="#dried-flowers" className="nav-link green-text">HOW LONG DO BOUQUETS OF DRIED FLOWERS LAST?</a>
                        <div id="dried-flowers" className="nav-submenu">
                            The dried flowers themselves are very durable. And therefore, the lifespan of dried flower bouquets starts from 1 year to infinity
                        </div>
                    </div>
                    <div className="nav-item">
                        <a href="#photo" className="nav-link green-text">DO YOU TAKE A PHOTO OF THE READY BOUQUET BEFORE SHIPPING?</a>
                        <div id="photo" className="nav-submenu">
                            Please indicate in the order notes about this and we will send a photo of the finished bouquet before delivery.
                            On holidays due to with a heavy workload this is not possible
                        </div>
                    </div>
                    <div className="nav-item ">
                        <a href="#flowers" className="nav-link green-text">HOW LONG SHOULD FLOWERS LAST IN A BOUQUET?</a>
                        <div id="flowers" className="nav-submenu">
                            <p>
                                Each of us wants a bouquet given by a dear person to remain fresh and blooming endlessly. 
                                However, like all good things, cut flowers cannot please us for too long. 
                                On average, most flowers will stay fresh for about a week before nature takes over. 
                                In addition, many of the fairly hardy specimens (such as roses, lilies and gerberas) are the most popular choices of florists and buyers. 
                            </p>
                            <p>
                                But to keep the bouquet fresh for a long time, here are some recommendations:
                                <ul className="nav-submenu__list">
                                    <li className="nav-submenu__list-item">Trim the stems with a clean knife every day;</li>
                                    <li className="nav-submenu__list-item">Wash the vase and change the water daily;</li>
                                    <li className="nav-submenu__list-item">Keep the bouquet in a cool place, away from direct sunlight, drafts and heating appliances;</li>
                                    <li className="nav-submenu__list-item">Use special fertilizer or add a little sugar to the water;</li>
                                    <li className="nav-submenu__list-item">If possible, remove any leaves that may be submerged.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a href="#freshness" className="nav-link green-text">HOW TO DETERMINE WHEN FLOWERS ARE FRESH?</a>
                        <div id="freshness" className="nav-submenu">
                            <p>Here are some recommendations: </p>
                            <p>
                                The density of the bud is not always a clear sign of a freshly cut plant. 
                                It all depends on the variety, for example, the same rose. 
                                But there should be no cracks, stains or drops of water on the petals. 
                                It is from these defects that the petals will begin to deteriorate.
                                It’s not so much the buds that should be elastic, but the petals themselves. 
                                With careful bending, they should return to their original place. 
                                This means the bud is elastic, and the bouquet will be composed of fresh flowers.
                            </p>
                            <p>
                                A fresh plant's leaves should also be fresh, dense, and elastic. 
                                There should be no dried leaves on the branches, and the leaves themselves should be without visible damage. 
                                An exception is gerberas: when making compositions of fresh flowers, they are used without leaves.
                            </p>
                            <p>
                                In fresh plants with a herbaceous stem, it should be elastic and erect. 
                                There should be no supports, rods or wires in the colors to choose from.
                                The freshness of the dense stem can be determined by its color: it should be green right up to the calyx. 
                                If you notice blackening, refuse to purchase.
                            </p>
                            <p>
                                The cut of any plant should be smooth and moist. 
                                Dryness or blackening of the cut indicates that it has been cut for a long time and that rotting has already begun. 
                                If the cut is without blackening, but loosened, then a lot of water has already entered the plant. 
                                And it will last less time.
                            </p>
                        </div>
                    </div>                
                
                </div>
            </div>
        </main> 
    )
};

export default FAQ;