import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// function myClick(e) {
//     //console.log(e, e.target.tagName);
//     let activity = {
//         "title" : "",
//         "category" : "",
//         "classTitle" : "",
//     };
//     //in case user click on 'P'
//     if (e.target.tagName === 'P') {
//
//         activity.title = e.target.innerText;
//
//         activity.category = e.target.nextSibling.innerText;
//
//         activity.classTitle = e.target.parentNode.getAttribute('class');
//         console.log(activity);
//         return activity;
//
//     }
//     //in case user click on 'H4'
//     else if (e.target.tagName === 'H4') {
//         activity.title = e.target.previousSibling.innerText;
//         activity.category = e.target.innerText;
//         activity.classTitle = e.target.parentNode.getAttribute('class');
//         console.log(activity);
//         return activity;
//
//     }
//     //in case user click on 'DIV'
//     activity.title = e.target.querySelector('p').innerText;
//     activity.category = e.target.querySelector('h4').innerText;
//     activity.classTitle = e.target.getAttribute('class');
//     console.log(activity);
//     return activity;
// }
// //console.log(activity);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />

);


