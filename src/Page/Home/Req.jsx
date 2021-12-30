import React, { useState } from 'react';
import Slider from "react-slick";
import './Req.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BloodImage } from '../Request/BloodImage';
import Footer from './Footer';
import { Button } from "@mui/material"

function Req() {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    let [imageInd, setImageInd] = useState(0);

    const settings = {
        // className: "center",
        // centerMode: true,

        centerPadding: "60px",

        speed: 500,

        infinity: true,
        lazyLoad: true,
        // speed: 300,
        slidesToShow: 3,
        centerMode: true,

        dots: true,
        //   infinite: true,
        //   slidesToShow: 3,
        //   slidesToScroll: 1,
        //   autoplay: true,
        //   speed: 500,
        //   autoplaySpeed: 500,
        //   cssEase: "linear",


        // centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageInd(next),
    };


    return (
        <div className="bloodCard">
            {/* <div className="reqContainer"> */}
            <div className="reqCenter">
                <div className="headindCenter">
                    <h2>Blood Type</h2>
                </div>
                <div className="center">
                    <div className="centerCard">
                        <Slider {...settings}>
                            {BloodImage.map((img, index) => (
                                <div key={index} className="centerCardContainer">
                                    <div className={index === imageInd ? "slide activeSlide" : "slide"} >
                                        <div className="cardText">
                                            <div className="imageCenter">
                                                <div className="imageCard">
                                                    <img src={img.img} alt={index} />
                                                </div>
                                            </div>
                                            <div className="textCard">
                                                <h3>{img.specility}</h3>
                                                <div className="des">
                                                    {img.descrition}
                                                </div>
                                            </div>
                                            <div className="cardButton">
                                                <Button variant="contained">Request Blood</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="footerContainer">
                <Footer />
            </div>
            {/* </div> */}
        </div>
    );
}



export default Req
