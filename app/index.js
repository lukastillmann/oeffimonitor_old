var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Card = require('./components/Card');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
