import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let imgs = new Array(50);
imgs.fill('img.jpg');
imgs[1] = 'http://www.w3schools.com/html/pic_mountain.jpg';
imgs[2] = 'http://www.w3schools.com/html/pic_graph.png';

ReactDOM.render(
  <div>
    <App imgs={imgs}/>
  </div>
  ,
  document.getElementById('root')
);
