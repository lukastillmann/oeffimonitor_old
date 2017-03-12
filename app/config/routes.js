var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Card =require('../components/Card');
var Search = require('../components/Search');
var Selecttest = require('../components/Selecttest');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Search}/>
    <Route path='/show' component={Card}>
      <IndexRoute component={Home} />
    </Route>
    <Route path='/Select' component={Selecttest} />
  </Router>
);

module.exports = routes;
