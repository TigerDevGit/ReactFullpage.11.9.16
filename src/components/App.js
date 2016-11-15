import React from 'react';
import PageSection from './PageSection';
import Panel from './Panel';
import StatusContents from './StatusContents';

class ImgShow extends React.Component {
  constructor() {
    super();
    this.state = {
      next: ''
    }
  }
  componentDidMount() {
    let obj = this;
    $("#img_show img").swipe({
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        let index = obj.props.x * 5 + obj.props.y;
        switch(direction){
          case 'up':
            $(this).hide("slide", {
              direction: "up"
            }, 1000, function(){
              $(this).css('display','block');
              obj.props.changeX(1);
            });
            $('#img_show img').not(this).show("slide", {
              direction: "down"
            }, 1000, function(){
              $(this).css('display','none');
            });
            obj.setState({next: obj.props.imgArr[(index+5)>49?(index+5-50):(index+5)]});
            break;
          case 'down':
            $(this).hide("slide", {
              direction: "down"
            }, 1000, function(){
              $(this).css('display','block');
              obj.props.changeX(-1);
            });
            $('#img_show img').not(this).show("slide", {
              direction: "up"
            }, 1000, function(){
              $(this).css('display','none');
            });
            obj.setState({next: obj.props.imgArr[(index-5)<0?(index-5+50):(index-5)]});
            break;
          case 'right':
            $(this).hide("slide", {
              direction: "right"
            }, 1000, function(){
              $(this).css('display','block');
              obj.props.changeY(-1);
            });
            $('#img_show img').not(this).show("slide", {
              direction: "left"
            }, 1000, function(){
              $(this).css('display','none');
            });
            obj.setState({next: obj.props.imgArr[((index%5)==0)?(index+4):(index-1)]});
            break;
          case 'left':
            $(this).hide("slide", {
              direction: "left"
            }, 1000, function(){
              $(this).css('display','block');
              obj.props.changeY(1);
            });
            $('#img_show img').not(this).show("slide", {
              direction: "right"
            }, 1000, function(){
              $(this).css('display','none');
            });
            obj.setState({next: obj.props.imgArr[((index%5)==4)?(index-4):(index+1)]});
            break;
          default:
            break;
        }

        
      }
    });
  }
  render() {
    let div_style = {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0'
    };
    let dis_none = {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      display: 'none'
    };
    let index = this.props.x * 5 + this.props.y;
    return (
      <div id="img_show" style={div_style} onClick={this.props.test}>
        <img src={this.props.imgArr[index]} style={div_style} alt="Smiley face" />      
        <img src={this.state.next} style={dis_none} alt="Smiley face" />      
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      panel: false
    };
  }
  changeXY(xx,yy) {
    if($('#panel').css('height')!='268px'){
      this.setState({
        x: xx,
        y: yy
      });
    } 
    console.log($('#panel').css('height'));
  }
  x_changeX(val) {
    this.setState((prev)=>{
      if (prev.x==0 && val==-1) { return ({x:9});}
      if (prev.x==9 && val==1) { return ({x:0});}
      return ({x:prev.x+val});
    });
  }
  y_changeY(val) {
    this.setState((prev)=>{
      if (prev.y==0 && val==-1) { return ({y:4});}
      if (prev.y==4 && val==1) { return ({y:0});}
      return ({y:prev.y+val});
    });
  }
  panelToggle() {
    // if(this.state.panel == false){
    //   alert();
    //   $('#panel').animate({
    //     height: '90%',
    //     width: '82%'
    //   }, 500);
    // }
    // else if(this.state.panel == true){
    //   $('#panel').animate({
    //     height: '268px',
    //     width: '212px'
    //   }, 500);
    // }
    this.setState((prev)=>({panel:!prev.panel}));
  }
  render() {
    console.log(this.state.panel);
    let full_style = {
      width: '100%',
      height: '100%'
    };
    return(
      <div style={full_style}>
        <ImgShow imgArr={this.props.imgs} x={this.state.x} y={this.state.y} changeX={this.x_changeX.bind(this)} changeY={this.y_changeY.bind(this)} />
        <Panel 
          imgArr={this.props.imgs} 
          x={this.state.x} 
          y={this.state.y} 
          panelToggle={this.panelToggle.bind(this)}
          onClickElement={this.changeXY.bind(this)}
        />
        <StatusContents />
      </div>
    );
  }
}

export default App;
module.exports  = App;
