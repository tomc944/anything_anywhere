var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HighLevelContainer = require('./components/high_level_container/high_level_container'),
    LandingPage = require('./components/landing_page/landing_page'),
    ItemIndex = require('./components/item_index/item_index'),
    Info = require('./components/info/main_info'),
    Contact = require('./components/info/contact'),
    HowWeOperate = require('./components/info/how_we_operate');

var routes = (
  <Route path="/" component={HighLevelContainer}>
    <IndexRoute component={LandingPage}/>
    <Route path="/products" component={ItemIndex}/>
    <Route path="/info" component={Info}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/operate" component={HowWeOperate}/>
  </Route>
);

$(function() {
  var content = document.getElementById('root');
  if (content) {
    ReactDOM.render(<Router>{routes}</Router> , content);
  }
});
