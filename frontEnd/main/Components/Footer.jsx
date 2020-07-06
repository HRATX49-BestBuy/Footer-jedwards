import React, {useState} from 'react';
import DevicesOtherOutlinedIcon from '@material-ui/icons/DevicesOtherOutlined';

const Footer = () => {

    return (

        <div className="footer">
            <div className="blueBar">
                <div className="emailWrapper">
                    <div className="emailContainer">

                        <div className="emailBlock">
                            <form className="emailForm">
                                <div className="innerFormWrapper">
                                    <div className="blueBarText">Get the latest deal and more.</div>
                                    <input className="emailAddress" type="text" placeholder="Enter email address"></input>
                                    <button className="footerButton">Sign up</button>
                                </div>
                            </form>
                            <div className="pipeContainer">
                                <h1 className="pipe"> | </h1>
                            </div>
                            <div className="deviceAppBlock">
                                <div className="deviceIcon">
                                    <i>
                                        <DevicesOtherOutlinedIcon fontSize="large"/>
                                    </i>
                                </div>
                                <div className="deviceSpans">
                                    <span className="bestBuyApp">Best Buy App</span>
                                    <span className="learnMore">Learn More</span>
                                </div>
                            </div>
                        </div>

                    </div>  
                </div>
            </div>

            <div className="footerLinksArea">
                <div className="innerLinksContainer">

                    {/* column 1 =============================== */}
                    <div className="column">
                        <div className="myBestBuy">
                            <h3 className="titleFooter">My BestBuy</h3>
                            <ul className="ulFooter">
                                <li className="liFooter">View Points and Certificates</li>
                                <li className="liFooter">Member Offers</li>
                                <li className="liFooter">Sign in or Create Account</li>
                            </ul>
                        </div>

                        <div className="creditCards">
                            <h3 className="titleFooter">Credit Cards</h3>
                            <ul className="ulFooter">
                                <li className="liFooter">Make a Payment at Citibank</li>
                                <li className="liFooter">Check Balance at Citibank</li>
                                <li className="liFooter">Credit Card Offers</li>
                                <li className="liFooter">Apply Now</li>
                            </ul>
                        </div>
                    </div>

                    {/* column 2 =============================== */}
                    <div className="column">
                        <div className="ordersReturns">
                            <h3 className="titleFooter">Orders and Returns</h3>
                            <ul className="ulFooter">
                                <li className="liFooter">Order Status</li>
                                <li className="liFooter">Shipping, Delivery, and Store Pickup</li>
                                <li className="liFooter">Return and Exchange Points</li>
                                <li className="liFooter">Match Price Gaurantee</li>
                            </ul>
                        </div>
                    </div>

                    {/* column 3 =============================== */}
                    <div className="column">
                        <div className="serviceSupport">
                            <h3 className="titleFooter">Service and Support</h3>
                            <ul className="ulFooter">
                                <li className="liFooter">Customer Service</li>
                                <li className="liFooter">Protection Plans</li>
                                <li className="liFooter">Schedule a Service</li>
                                <li className="liFooter">Trade-In Program</li>
                                <li className="liFooter">Product Recalls</li>
                            </ul>
                        </div>
                    </div>

                    {/* column 4 =============================== */}
                    <div className="column">
                        <div className="partnerships">
                            <h3 className="titleFooter">Partnerships</h3>
                            <ul className="ulFooter">
                                <li className="liFooter">Affiliate Program</li>
                                <li className="liFooter">Developers</li>
                                <li className="liFooter">Best Buy Education</li>
                                <li className="liFooter">Best Buy for Business</li>
                                <li className="liFooter">Advertise with Us</li>
                            </ul>
                        </div>
                        <div className="internationalSites">
                            <h3 className="titleFooter">International Sites</h3>
                            <ul className="ulFooter">
                                <li className="liFooter">Best Buy</li>
                                <li className="liFooter">Best Buy Canada</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;