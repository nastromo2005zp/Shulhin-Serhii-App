import React from 'react';

const RequestBoredServer = () => {

        //function request to server boredapi.com
        function httpGet(theUrl) {







            let xmlHttpReq = new XMLHttpRequest();
            xmlHttpReq.open("GET", theUrl, false);
            xmlHttpReq.send(null);
            return xmlHttpReq.responseText;

        }
    const responceFromServer = httpGet('http://www.boredapi.com/api/activity/');//making a request to the server

    const responceObject = JSON.parse(responceFromServer);//making an object from string which we recevied from server


    return (
        <>
                    <p>{responceObject.activity}</p>
                    <h4>{responceObject.type}</h4>

        </>


    );
};

export default RequestBoredServer;