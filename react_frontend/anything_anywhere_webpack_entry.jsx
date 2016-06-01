var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HighLevelAppComponent = require('./components/high_level_app_components/high_level_app_component');

var routes = (
  <Route path="/" component={HighLevelAppComponent}>
  </Route>
);

$(function() {
  var content = document.getElementById('root');
  if (content) {
    ReactDOM.render(<Router>{routes}</Router> , content);
  }
});
