import React, {useEffect, useState} from 'react';
import './styles/App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components/SectionOne';
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionTwoThreeParent from "./components/SectionTwoThreeParent";
import SectionFourFiveParent from "./components/SectionFourFiveParent";



function App (){






  return (
    <div className="App">

        <SectionOne />
        <SectionTwoThreeParent />
        <SectionFourFiveParent />


    </div>
  );
}

export default App;
