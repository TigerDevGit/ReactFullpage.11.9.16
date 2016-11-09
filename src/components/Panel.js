import React from 'react';

class Row extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-2'><img src="img.jpg" alt="Smiley face" /></div>
        <div className='col-xs-2'><img src="img.jpg" alt="Smiley face" /></div>
        <div className='col-xs-2'><img src="img.jpg" alt="Smiley face" /></div>
        <div className='col-xs-2'><img src="img.jpg" alt="Smiley face" /></div>
        <div className='col-xs-2'><img src="img.jpg" alt="Smiley face" /></div>
        <div className='col-xs-2'><img src="img.jpg" alt="Smiley face" /></div>
      </div>
    );
  }
}

class Panel extends React.Component {
  render() {
    let arr = Array(10).fill(0);
    return(
      <div id="panel" className='container'>
        {arr.map((e,i)=>(<Row key={i}/>))}
      </div>
    );
  }
}

export default Panel;
