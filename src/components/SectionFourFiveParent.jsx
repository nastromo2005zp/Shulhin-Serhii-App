import React, {useEffect, useState} from 'react';
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

const SectionFourFiveParent = () => {





    let [data, setData] = useState(

        [
            {
                activity_id : "",
                activity_title : "",
                category_title : "",
                time_when_completed : "",
            }
        ]);




        fetch("http://localhost:8000/getactivities")
            .then(res => res.json())
            .then(
                (res) => {
                    //console.log(res);
                    setData(res);


                },
                (error) => {

                }
            );






    return (
        <div>
            <SectionFour data={data}/>
            <SectionFive data={data}/>
        </div>
    );
};

export default SectionFourFiveParent;