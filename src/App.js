import React from 'react';
import './styles/App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components/SectionOne';
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import {getActivityInfo} from "./state";
import {activityObj} from "./state";


function App (props){
    //debugger;




  return (
    <div className="App">
        <SectionOne />
        <SectionTwo getActivityInfo={props.getActivityInfo}/>
        <SectionThree activityObj={props.activityObj}/>
        <SectionFour />
        <SectionFive />


    </div>
  );
}

export default App;
