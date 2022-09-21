import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {rerenderEntireTree} from "./render";
import {getActivityInfo} from "./state";
import {activityObj} from "./state";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App getActivityInfo={getActivityInfo} activityObj={activityObj}/>

);

// rerenderEntireTree(getActivityInfo, activityObj);
//debugger;

