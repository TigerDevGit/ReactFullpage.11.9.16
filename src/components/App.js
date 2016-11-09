import React from 'react';
import PageSection from './PageSection';
import Panel from './Panel';
import StatusContents from './StatusContents';

class App extends React.Component {
  render() {
    return(
      <div>
        <PageSection />
        <Panel />
        <StatusContents />
      </div>
    );
  }
}

export default App;
module.exports  = App;
