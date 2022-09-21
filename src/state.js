import {rerenderEntireTree} from "./render";


export let activityObj = {

            "title" : "",
            "category" : "",
            "classTitle" : "",




};


export let getActivityInfo = (e) => {
    //console.log(e, e.target.tagName);
    let activity =
        {
            "title" : "",
            "category" : "",
            "classTitle" : "",
        }
    //alert('getActivityInfo');
    //in case user click on 'P'

    if (e.target.tagName === 'P') {

        activityObj.title = e.target.innerText;

        activityObj.category = e.target.nextSibling.innerText;

        activityObj.classTitle = e.target.parentNode.getAttribute('class');
        //console.log(activity);


    }
    //in case user click on 'H4'
    else if (e.target.tagName === 'H4') {
        activityObj.title = e.target.previousSibling.innerText;
        activityObj.category = e.target.innerText;
        activityObj.classTitle = e.target.parentNode.getAttribute('class');
        //console.log(activity);

    } else {
        //in case user click on 'DIV'
        activityObj.title = e.target.querySelector('p').innerText;
        activityObj.category = e.target.querySelector('h4').innerText;
        activityObj.classTitle = e.target.getAttribute('class');
        //console.log(activity);


    }

    console.log(activityObj);

    //activityObj.activity.push(activity);
    //getSliderItem(activityObj);
    // rerenderEntireTree(getActivityInfo, activityObj);



}


