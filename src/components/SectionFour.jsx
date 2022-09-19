import React from 'react';

const SectionFour = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="fourthSectionHeader">
                            Achievements
                        </h2>
                    </div>
                </div>

                <div className="row achievements d-flex justify-content-around">
                    <div className="col-4 achievements__item achievements__item_one"><p id="education">0</p></div>
                    <div className="col-4 achievements__item achievements__item_two"><p id="recreational">0</p></div>
                    <div className="col-4 achievements__item achievements__item_third"><p id="social">0</p></div>
                </div>
                <div className="row achievements d-flex justify-content-around">
                    <div className="col-4 achieveTitle"><p>Education</p></div>
                    <div className="col-4 achieveTitle"><p>Recreational</p></div>
                    <div className="col-4 achieveTitle"><p>Social</p></div>
                </div>

                <div className="row achievements d-flex justify-content-around">
                    <div className="col-6 achievements__item achievements__item_four"><p id="charity">0</p></div>
                    <div className="col-6 achievements__item achievements__item_five"><p id="cooking">0</p></div>
                    <div className="col-4 achievements__item achievements__item_one"><p id="diy">0</p></div>
                </div>
                <div className="row achievements d-flex justify-content-around">
                    <div className="col-6 achieveTitle"><p>Charity</p></div>
                    <div className="col-6 achieveTitle"><p>Cooking</p></div>
                    <div className="col-4 achieveTitle"><p>Diy</p></div>

                </div>

                <div className="row achievements d-flex justify-content-around">
                    <div className="col-4 achievements__item achievements__item_two"><p id="relaxation">0</p></div>
                    <div className="col-4 achievements__item achievements__item_third"><p id="music">0</p></div>
                    <div className="col-6 achievements__item achievements__item_four"><p id="busywork">0</p></div>
                </div>
                <div className="row achievements d-flex justify-content-around">
                    <div className="col-4 achieveTitle"><p>Relaxation</p></div>
                    <div className="col-4 achieveTitle"><p>Music</p></div>
                    <div className="col-4 achieveTitle"><p>Busywork</p></div>
                </div>
            </div>
        </section>
    );
};

export default SectionFour;