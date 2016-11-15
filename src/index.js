import './css/style.css';
import 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let imgs = new Array(50);
imgs.fill('img.jpg');
imgs[1] = '1.png';
imgs[2] = '2.png';
console.log(imgs);

ReactDOM.render(
  <div>
    <App imgs={imgs}/>
  </div>
  ,
  document.getElementById('root')
);
