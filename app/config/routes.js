var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Card =require('../components/Card');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Card}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
