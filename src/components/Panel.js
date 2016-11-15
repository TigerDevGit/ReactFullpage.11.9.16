import React from 'react';

class Element extends React.Component {
  
  render() {
    let i = this.props.imgArr[this.props.rowNum*5+this.props.colNum];
              // debugger
    return (
      <div className='col-xs-2' onClick={() => this.props.onClickElement(this.props.rowNum, this.props.colNum)}>
        { 
          this.props.rowNum === this.props.selectedRowNum &&
          this.props.colNum === this.props.selectedColNum ?
            <img 
              style={{'border': '2px #8fc2ff solid'}}
              className={this.props.key}
              src={i}
              alt="Smiley face"
            />
            :
            <img 
              className={this.props.key}
              src={i}
              alt="Smiley face"
            />
        }

      </div>
    );
  }
}

class Row extends React.Component {
  render() {
    let arr = Array(5).fill(0);
    return (
      <div className='row'>
        {arr.map((e,i)=>(
          <Element 
            key={i}
            imgName="img.jpg"
            rowNum={this.props.rowNum}
            colNum={i}
            imgArr={this.props.imgArr}
            selectedRowNum={this.props.selectedRowNum}
            selectedColNum={this.props.selectedColNum}
            onClickElement={this.props.onClickElement}
          />
        ))}
      </div>

    );
  }
}

class Panel extends React.Component {
  render() {
    let arr = Array(this.props.imgArr.length/5).fill(0);
    return(
      <div id="panel" className='container' onClick={this.props.panelToggle}>
        {arr.map((e,i)=>(
          <Row key={i}
            rowNum={i}
            imgArr={this.props.imgArr}
            selectedRowNum={this.props.x}
            selectedColNum={this.props.y}
            onClickElement={this.props.onClickElement}
          />
        ))}
      </div>
    );
  }
}

export default Panel;
