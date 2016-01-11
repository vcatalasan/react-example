var React = require('react'); //import react module
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(
  <ListManager title="ingredients"/>,
  document.getElementById('ingredients')
);
