var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HighLevelContainer = require('./components/high_level_container/high_level_container'),
    LandingPage = require('./components/landing_page/landing_page'),
    ItemIndex = require('./components/item_index/item_index');

var routes = (
  <Route path="/" component={HighLevelContainer}>
    <IndexRoute component={LandingPage}/>
    <Route path="/products" component={ItemIndex}/>
    <Route path="/info" component={Info}/>
  </Route>
);

$(function() {
  var content = document.getElementById('root');
  if (content) {
    ReactDOM.render(<Router>{routes}</Router> , content);
  }
});
