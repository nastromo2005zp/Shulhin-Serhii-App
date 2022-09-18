import React from 'react';
import './styles/App.css';
import './components/SectionOne';
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <div className="App">
        <SectionOne />
        <SectionTwo />

    </div>
  );
}

export default App;
