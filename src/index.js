import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import MainApp from "./App";

// let createEntirePage = () => {
ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);
// }

//createEntirePage();

// store.subscribe(() => {
//     createEntirePage();
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
