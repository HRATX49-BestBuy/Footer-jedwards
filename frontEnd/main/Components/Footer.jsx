import React, {useState} from 'react';

const Footer = () => {

    return (

        <div className="footer">
            <div className="blueBar">



            </div>

            <div className="footerLinksArea">
                <div className="innerLinksContainer">

                    {/* column 1 =============================== */}
                    <div className="column">
                        <div className="myBestBuy">
                            <h3>My BestBuy</h3>
                        </div>

                        <div className="creditCards">
                            <h3>Credit Cards</h3>
                        </div>
                    </div>

                    {/* column 2 =============================== */}
                    <div className="column">
                        <div className="ordersReturns">
                            <h3>Orders and Returns</h3>
                        </div>
                    </div>

                    {/* column 3 =============================== */}
                    <div className="column">
                        <div className="serviceSupport">
                            <h3>Service and Support</h3>
                        </div>
                    </div>

                    {/* column 4 =============================== */}
                    <div className="column">
                        <div className="partnerships">
                            <h3>Partnerships</h3>
                        </div>
                        <div className="internationalSites">
                            <h3>International Sites</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Footer;