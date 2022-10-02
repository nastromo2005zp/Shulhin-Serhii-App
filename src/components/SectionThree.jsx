import React from 'react';
import SlickSlider from "./SlickSlider";


const SectionThree = (props) => {
        //Slider


    return (
        <div>

            <SlickSlider

                activityObj={props.activityObj}
                selectDiv={props.selectDiv}
            />

        </div>
    );
};

export default SectionThree;