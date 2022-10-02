import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlickSlider(props) {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    const sliderHeader = "Ideas in my list";
    //delete first empty element of activityObj
    if(!props.activityObj[0].title) {
        props.activityObj.shift();
    }



    return (
        <div>
            <h2 className="sliderHead">{sliderHeader}</h2>

            <Slider {...settings}>

                {

                    props.activityObj.map((actObj, index) => (
                        <div className="d-flex justify-content-center"  key={index}>
                            <div className={actObj.classTitle} key={index} onClick={() => props.selectDiv(index)}>
                                <p>{actObj.title}</p>
                                <h4>{actObj.category}</h4>
                            </div>
                        </div>
                    ))}

            </Slider>

        </div>
    );








}
export default SlickSlider;