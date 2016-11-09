import React from 'react';

class StatusElement extends React.Component {
  render() {
    let itemStyle = {
      height: '100px',
      color: 'white'
    };
    return (
      <div className='col-xs-4' style={itemStyle}>
        <h3>{this.props.title}</h3>
        <hr/>
        <h1>{this.props.value}</h1>
        <hr/>
        <span>{this.props.comment}</span>
      </div>
    );
  }
}

class StatusContents extends React.Component {
  render() {
    let arr = Array(6).fill(0);
    return(
      <div id="status">
        <img id="buttonImg" src="button.png" alt="Smiley face" />
        <div id="statusContents">
          <img id="lineImg" src="line.png" alt="Smiley face" />
          <div className="container">
            <div id="contentsTable" className="row">
              <div className='row col-xs-7'>
                <StatusElement title="Temp" value="89.8'" comment="since yesterday" />
                <StatusElement title="Humidity" value="80%" comment="since yesterday" />
                <StatusElement title="VPD" value="9.4" comment="no change" />
                <StatusElement title="Lux" value="7.8" comment="since yesterday" />
                <StatusElement title="Start" value="4/25" comment="germination" />
                <StatusElement title="Harvest" value="7/27" comment="since yesterday" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusContents;
