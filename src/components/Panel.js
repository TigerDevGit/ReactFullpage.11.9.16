import React from 'react';

class Element extends React.Component {
  render() {
    return (
      <div className='col-xs-2'><img src={this.props.imgName} alt="Smiley face" /></div>
    );
  }
}

class Row extends React.Component {
  render() {
    let arr = Array(5).fill(0);
    return (
      <div className='row'>
        {arr.map((e,i)=>(<Element key={i} imgName="img.jpg"/>))}
      </div>
    );
  }
}

class Panel extends React.Component {
  render() {
    let arr = Array(this.props.imgArr.length/5).fill(0);

    return(
      <div id="panel" className='container'>
        {arr.map((e,i)=>(<Row key={i}/>))}
      </div>
    );
  }
}

export default Panel;
