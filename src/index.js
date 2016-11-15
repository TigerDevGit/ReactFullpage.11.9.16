import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let imgs = new Array(50);
imgs.fill('img.jpg');
imgs[1] = 'a.png';
imgs[2] = 'b.png';

ReactDOM.render(
  <div>
    <App imgs={imgs}/>
  </div>
  ,
  document.getElementById('root')
);
