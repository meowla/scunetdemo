import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const color="white";
const backgroundColor="#BA2A17";
const margin="0";
root.render(
  <>
    <div><h1 style={{color,backgroundColor,margin}}> 四川大学</h1><h2 style={{color,backgroundColor,margin}}>Sichuan University</h2></div>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
