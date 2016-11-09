import './css/style.css';
import jQuery from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let arr = new Array(10);
arr.fill(1);
let comarr = arr.map((entity,i)=>(<App key={i}/>));
console.log(JSON.stringify(comarr));
ReactDOM.render(
  <div>
    <App count='50' oneColum='5'/>
  </div>
  ,
  document.getElementById('root')
);
