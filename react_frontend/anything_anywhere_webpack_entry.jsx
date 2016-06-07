var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HighLevelContainer = require('./components/high_level_container/high_level_container'),
    LandingPage = require('./components/landing_page/landing_page'),
    ItemIndex = require('./components/item_index/item_index'),
    About = require('./components/info/about'),
    Contact = require('./components/info/contact'),
    HowWeOperate = require('./components/info/how_we_operate'),
    AdditionalServices = require('./components/info/additional_services/additional_services'),
    Appraisal = require('./components/info/additional_services/appraisal'),
    MarketResearch = require('./components/info/additional_services/market_research');


var routes = (
  <Route path="/" component={HighLevelContainer}>
    <IndexRoute component={LandingPage}/>
    <Route path="/products" component={ItemIndex}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/operate" component={HowWeOperate}/>
    <Route path="/services" component={AdditionalServices}>
      <Route path="appraisal" component={Appraisal}/>
      <Route path="market_research" component={MarketResearch}/>
    </Route>
  </Route>
);

$(function() {
  var content = document.getElementById('root');
  if (content) {
    ReactDOM.render(<Router>{routes}</Router> , content);
  }
});
