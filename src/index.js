import './css/style.css';
import jQuery from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <div>
    <App count='50' oneColum='5'/>
  </div>
  ,
  document.getElementById('root')
);
