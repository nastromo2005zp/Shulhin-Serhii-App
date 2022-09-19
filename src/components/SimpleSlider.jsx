import React, { Component } from "react";
import Slider from "react-slick";
import RequestBoredServer from "./RequestBoredServer";

export default class SimpleSlider extends Component {
    // constructor(props) {
    //     super(props);
    //
    //
    // }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        };
        return (
            <div>
                <h2 className="sliderHead">Ideas in my list</h2>
                <Slider {...settings}>

                    <div className="col-6 col-sm-6 d-flex justify-content-center">
                            <div className="menu menu__menuItem menu__menuItem_first">
                                <RequestBoredServer />
                            </div>
                    </div>
                    <div className="col-6 col-sm-6 d-flex justify-content-center">
                            <div className="menu menu__menuItem menu__menuItem_second">
                                <RequestBoredServer />
                            </div>
                    </div>
                    <div className="col-6 col-sm-6 d-flex justify-content-center">
                            <div className="menu menu__menuItem menu__menuItem_third">
                                <RequestBoredServer />
                            </div>
                    </div>
                    <div className="col-6 col-sm-6 d-flex justify-content-center">
                            <div className="menu menu__menuItem menu__menuItem_fourth">
                                <RequestBoredServer />
                            </div>
                    </div>



                </Slider>
            </div>
        );
    }
}
