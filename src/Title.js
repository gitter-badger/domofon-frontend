import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const Title = React.createClass({
  render: function () {
    var title = 'Hello, ' + this.props.name + '!';
    return <AppBar title={title} />;
  }
});

export default Title;
