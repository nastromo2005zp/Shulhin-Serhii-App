import React from 'react';
import RequestBoredServer from "./RequestBoredServer";


const SectionTwo = (props) => {




    return (



        <section className="secondSection">

            <div className="container" id="activitySelector">
                <div className="row">
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
                </div>
                <div className="row">
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
                </div>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col-12 logoSquare">
                        <img src={require("../images/logo_square_40_40.png")} alt="logo-square"/>


                    </div>


                </div>
            </div>


        </section>


    );
};

export default SectionTwo;