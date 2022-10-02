import React from 'react';

const TableItems = (props) => {

//table items for section five


    const dataItems = props.data;

    dataItems.map((item) => {

        let currentTime = new Date().getTime();

        let deltaTime = Math.round((currentTime - item.time_when_completed)/1000);

        let delta;

        if (deltaTime <= 60) {
            delta = 'Just now';

        }
        else if (deltaTime > 60 && deltaTime <= 3600) {
            delta = Math.round(deltaTime/60)+' minutes ago';

        }
        else if (deltaTime > 3600 && deltaTime <= 86400) {
            delta = Math.round(deltaTime/3600)+' hours ago';

        }
        else if (deltaTime > 86400 && deltaTime <= 604800) {
            delta = Math.round(deltaTime/86400)+' days ago';

        }
        else if (deltaTime > 604800 && deltaTime <= 2592000) {
            delta = Math.round(deltaTime/604800)+' weeks ago';

        }
        else if (deltaTime > 2629744 && deltaTime <= 31556926) {
            delta = Math.round(deltaTime/2629744)+' months ago';

        }
        else  if (deltaTime > 31556926 && deltaTime <= 631138520)
        {
            delta = Math.round(deltaTime/31556926)+' years ago';
        }
        else if (deltaTime > 631138520) {
            delta = "";
        }
        item.time_when_completed = delta;
    })

    const tableRow = (

        dataItems.map((dataArr) =>



            <div  className="row eventTable" key={dataArr.activity_id.toString()}>
                <div className="col-1">{dataArr.activity_id}</div>
                <div  className="col-5 headerTable">{dataArr.activity_title}</div>
                <div className="col-3 typeEvent">{dataArr.category_title}</div>
                <div className="col-3 dateEvent">{dataArr.time_when_completed}</div>
            </div>
        )
    )

        return (
            <div>
                {tableRow}
            </div>
        );


};

export default TableItems;