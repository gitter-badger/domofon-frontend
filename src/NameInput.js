import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


const NameInput = React.createClass({
  getInitialState: function () {
    return {name: this.props.initialName};
  },
  nameChanged: function (e) {
    this.setState({name: e.target.value});
  },
  nameSubmitted: function (e) {
    e.preventDefault();
    this.props.onNameChanged(this.state.name.trim());
  },
  render: function () {
    return (
      <form onSubmit={this.nameSubmitted}>
        <TextField value={this.state.name} onChange={this.nameChanged}/>
	<RaisedButton primary={true} label="Submit" type="submit"/>
      </form>
    );
  }
});


export default NameInput;
