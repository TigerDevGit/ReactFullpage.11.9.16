import React from 'react';
import PageSection from './PageSection';
import Panel from './Panel';
import StatusContents from './StatusContents';

class App extends React.Component {
  render() {
    let cnt = Number(this.props.count), oCol = Number(this.props.oneColum);
    return(
      <div>
        <PageSection rowCount={cnt/oCol} />
        <Panel imgCount={cnt}/>
        <StatusContents />
      </div>
    );
  }
}

export default App;
module.exports  = App;
