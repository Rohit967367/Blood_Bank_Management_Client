import React from 'react'
import './Footer.css'
import { FaDiscord, FaFacebook, FaGoogle, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className="footerContainer">
            <div className="footer">
                <div className="footerLeft">
                    <div className="icon">
                        <div className="fb">
                            <FaFacebook />
                        </div>
                        <div className="insta">
                            <FaInstagram />
                        </div>
                        <div className="tw">
                            <FaTwitter />
                        </div>
                        <div className="tele">
                            <FaTelegram />
                        </div>
                        <div className="dis">
                            <FaDiscord />
                        </div>
                        <div className="wh">
                            <FaWhatsapp />
                        </div>
                        <div className="google">
                            <FaGoogle />
                        </div>
                    </div>
                    <div className="follow">
                        <h5>
                            Follow Us
                        </h5>
                    </div>
                    {/* <FaInstagramSquare/> */}
                </div>
                {/* <div className="footerCenter">
                    center
                </div>
                <div className="footerRight">
                    Right
                </div> */}
                <div className="copyright">
                    <span>{date}</span> &copy; All Right reseved
                </div>
            </div>
        </div>
    )
}

export default Footer
