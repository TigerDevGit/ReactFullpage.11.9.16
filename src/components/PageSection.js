import React from 'react';

class SectionRow extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="slide"><img src="img.jpg" alt="Smiley face" /></div>
        <div className="slide"><img src="img.jpg" alt="Smiley face" /></div>
        <div className="slide"><img src="img.jpg" alt="Smiley face" /></div>
        <div className="slide"><img src="img.jpg" alt="Smiley face" /></div>
        <div className="slide"><img src="img.jpg" alt="Smiley face" /></div>
      </div>
    );
  }
}

class PageSection extends React.Component {
  render() {
    let arr = Array(Number(this.props.rowCount)).fill(0);
    return(
      <div id="fullpage">
        {arr.map((e,i)=>(<SectionRow key={i}/>))}
      </div>

    );
  }
}

export default PageSection;
