var React = require('react');  //import react module
var ListItem = React.createClass({   //create react component
  render: function () {
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    )
  }
});

module.exports = ListItem;
