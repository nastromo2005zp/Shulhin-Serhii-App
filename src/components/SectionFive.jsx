import React, {useState, useEffect} from 'react';
import TableItems from "./TableItems";


const SectionFive = (props) => {
        //section table of results



    return (

        <section className="fiveSection">


            <h2>Completed challenges</h2>
            <div className="container" id="challengesTable">

                <div className="row eventTable">
                    <div className="col-1"></div>
                    <div className="col-5 headerTable"><h5>Title</h5></div>
                    <div className="col-3 typeEvent"><h5>Type</h5></div>
                    <div className="col-3 dateEvent"><h5>When</h5></div>
                </div>

                <TableItems data={props.data} />


            </div>
        </section>
    );
};


export default SectionFive;