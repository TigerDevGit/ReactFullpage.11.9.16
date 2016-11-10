import React from 'react';

class Element extends React.Component {
  render() {
    return (
      <div className="slide"><img src={this.props.filename} alt="Smiley face" /></div>
    );
  }
}

class SectionRow extends React.Component {
  render() {
    let arr = Array(5).fill(0);
    return (
      <div className="section">
        {arr.map((e,i)=>(<Element key={i} filename="img.jpg"/>))}
      </div>
    );
  }
}

class PageSection extends React.Component {
  render() {
    let arr = Array(10).fill(0);
    return(
      <div id="fullpage">
        {arr.map((e,i)=>(<SectionRow key={i}/>))}
      </div>

    );
  }
}

export default PageSection;
