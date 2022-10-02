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


    useEffect(() => {


        fetch("http://localhost:8000/getactivities")
            .then(res => res.json())
            .then(
                (res) => {
                    //console.log(res);
                    setData(res);


                },
                (error) => {

                }
            )
    }, []);


    const clearAll = () => {
        fetch("http://localhost:8000/cleartable")
            .then(res => res.json())
            .then(
                (res) => {
                    //console.log(res);
                    setData([
                        {
                            activity_id : "",
                            activity_title : "",
                            category_title : "",
                            time_when_completed : "",
                        }
                    ]);


                },
                (error) => {

                }
            )
    }









    return (
        <div>
            <SectionFour data={data}/>
            <SectionFive data={data}/>
            <div className="clearRow">

                <button onClick={clearAll}>CLEAR</button>

            </div>

        </div>
    );
};

export default SectionFourFiveParent;