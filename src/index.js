import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let arr = new Array(10);
arr.fill(1);
let comarr = arr.map((entity,i)=>(<App key={i}/>));
console.log(JSON.stringify(comarr));
ReactDOM.render(
  <div>
    <App />
  </div>
  ,
  document.getElementById('root')
);
