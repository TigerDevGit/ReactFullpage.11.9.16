import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let imgs = new Array(50);
imgs.fill('img.jpg');
imgs[1] = 'a.jpg';
imgs[2] = 'b.jpg';

ReactDOM.render(
  <div>
    <App imgs={imgs}/>
  </div>
  ,
  document.getElementById('root')
);
