import React, {useState} from 'react';
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";


const SectionTwoThreeParent = () => {
    const [activityObj, setNewDivInfo] = useState([{
        "title" : "",
        "category" : "",
        "classTitle" : "",

    }]);

    const getNewActivityItem = (e) => {

        if (e.target.tagName === 'P') {
            activityObj.push({
                "title": e.target.innerText,
                "category": e.target.nextSibling.innerText,
                "classTitle": e.target.parentNode.getAttribute('class'),
            })
        }
        //in case user click on 'H4'
        else if (e.target.tagName === 'H4') {
            activityObj.push({
                "title": e.target.previousSibling.innerText,
                "category": e.target.innerText,
                "classTitle": e.target.parentNode.getAttribute('class'),
            })

        } else {
            //in case user click on 'DIV'
            activityObj.push({
                "title": e.target.querySelector('p').innerText,
                "category": e.target.querySelector('h4').innerText,
                "classTitle": e.target.getAttribute('class'),

            })
        }

        setNewDivInfo(
            [...activityObj]
        );

    }

    const selectDiv = (index) => {
        //console.log(index);
        //console.log(JSON.stringify(activityObj[index]));

        const date = new Date().getTime();

        //function query to database
        fetch("http://localhost:8000/addnewitem?activity_title="+activityObj[index].title+"&category_title="+activityObj[index].category+"&time_when_completed="+date);
            // .then(res => res.json())
            // .then(
            //     (res) => {
            //
            //         console.log(res);
            //
            //     },
            //     (error) => {
            //
            //     }
            // );

        if(activityObj.length>1){
            activityObj.splice(index,1);
            setNewDivInfo(
                [...activityObj]
            );
        }
        else {
            activityObj.splice(index,1);
            activityObj[0] = {
                "title" : "",
                "category" : "",
                "classTitle" : "",
            };
            setNewDivInfo(
                [...activityObj]
            );
        }


    }
    return (
        <div>
            <SectionTwo
                getNewActivityItem={getNewActivityItem}
            />
            <SectionThree
                activityObj={activityObj}
                selectDiv={selectDiv}
            />

            
        </div>
    );
};

export default SectionTwoThreeParent;