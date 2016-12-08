require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Hello!" />
        <div className="notice">This is the landing page.</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
