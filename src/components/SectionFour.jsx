import React  from 'react';

const SectionFour = (props) => {

        //section table of achievements

            let achievementCount = {
                education        : 0,
                recreational     : 0,
                social           : 0,
                charity          : 0,
                cooking          : 0,
                diy              : 0,
                relaxation       : 0,
                music            : 0,
                busywork         : 0,

            }
            props.data.map((data) => {
                switch (data.category_title) {

                    case 'education' : achievementCount.education++;
                        break;

                    case 'recreational' : achievementCount.recreational++;
                        break;

                    case 'social' : achievementCount.social++;
                        break;

                    case 'charity' : achievementCount.charity++;
                        break;

                    case 'cooking' : achievementCount.cooking++;
                        break;

                    case 'diy' : achievementCount.diy++;
                        break;

                    case 'relaxation' : achievementCount.relaxation++;
                        break;

                    case 'music' : achievementCount.music++;
                        break;

                    case 'busywork' : achievementCount.busywork++;
                        break;



                    default : console.log("");
                        break;

                }
            })





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
                    <div className="col-4 achievements__item achievements__item_one"><p id="education">{achievementCount.education}</p></div>
                    <div className="col-4 achievements__item achievements__item_two"><p id="recreational">{achievementCount.recreational}</p></div>
                    <div className="col-4 achievements__item achievements__item_third"><p id="social">{achievementCount.social}</p></div>
                </div>
                <div className="row achievements d-flex justify-content-around">
                    <div className="col-4 achieveTitle"><p>Education</p></div>
                    <div className="col-4 achieveTitle"><p>Recreational</p></div>
                    <div className="col-4 achieveTitle"><p>Social</p></div>
                </div>

                <div className="row achievements d-flex justify-content-around">
                    <div className="col-6 achievements__item achievements__item_four"><p id="charity">{achievementCount.charity}</p></div>
                    <div className="col-6 achievements__item achievements__item_five"><p id="cooking">{achievementCount.cooking}</p></div>
                    <div className="col-4 achievements__item achievements__item_one"><p id="diy">{achievementCount.diy}</p></div>
                </div>
                <div className="row achievements d-flex justify-content-around">
                    <div className="col-6 achieveTitle"><p>Charity</p></div>
                    <div className="col-6 achieveTitle"><p>Cooking</p></div>
                    <div className="col-4 achieveTitle"><p>Diy</p></div>

                </div>

                <div className="row achievements d-flex justify-content-around">
                    <div className="col-4 achievements__item achievements__item_two"><p id="relaxation">{achievementCount.relaxation}</p></div>
                    <div className="col-4 achievements__item achievements__item_third"><p id="music">{achievementCount.music}</p></div>
                    <div className="col-6 achievements__item achievements__item_four"><p id="busywork">{achievementCount.busywork}</p></div>
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