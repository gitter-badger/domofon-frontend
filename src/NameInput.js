import React from 'react';


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
        <input type="text"
               value={this.state.name}
               onChange={this.nameChanged}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
});


export default NameInput;
