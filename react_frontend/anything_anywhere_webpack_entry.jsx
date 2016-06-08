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
    Links = require('./components/info/links'),
    Blog = require('./components/info/blog'),
    AdditionalInformation = require('./components/info/additional_information'),
    A2Z = require('./components/info/additional_info_items/a2z'),
    Abbrev = require('./components/info/additional_info_items/abbrev'),
    Apprais = require('./components/info/additional_info_items/apprais'),
    BritabBrev = require('./components/info/additional_info_items/britabbrev'),
    Buying = require('./components/info/additional_info_items/buying'),
    Clean = require('./components/info/additional_info_items/clean'),
    Collecting = require('./components/info/additional_info_items/collecting'),
    Faleri = require('./components/info/additional_info_items/faleri'),
    Finnist = require('./components/info/additional_info_items/fininst'),
    Grading = require('./components/info/additional_info_items/grading'),
    Jerks = require('./components/info/additional_info_items/jerks'),
    PlasticMon = require('./components/info/additional_info_items/plasticmon'),
    Privacy = require('./components/info/additional_info_items/privacy'),
    Security = require('./components/info/additional_info_items/security'),
    SonSign = require('./components/info/additional_info_items/sonsign'),
    Tye = require('./components/info/additional_info_items/tye'),
    Varieties = require('./components/info/additional_info_items/varieties'),
    WebsiteMan = require('./components/info/additional_info_items/websiteman');
    AdditionalServices = require('./components/info/additional_services/additional_services'),
    Appraisal = require('./components/info/additional_services/appraisal'),
    MarketResearch = require('./components/info/additional_services/market_research'),
    SubscriptionService = require('./components/info/additional_services/subscription_service');



var routes = (
  <Route path="/" component={HighLevelContainer}>
    <IndexRoute component={LandingPage}/>
    <Route path="/products" component={ItemIndex}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/operate" component={HowWeOperate}/>
    <Route path="/links" component={Links}/>
    <Route path="/blog" component={Blog}/>

    <Route path="/additional_information" component={AdditionalInformation}>
      <Route path="/a2z" component={A2Z}/>
      <Route path="/abbrev" component={Abbrev}/>
      <Route path="/apprais" component={Apprais}/>
      <Route path="/britabbrev" component={BritabBrev}/>
      <Route path="/buying" component={Buying}/>
      <Route path="/clean" component={Clean}/>
      <Route path="/collecting" component={Collecting}/>
      <Route path="/faleri" component={Faleri}/>
      <Route path="/finnist" component={Finnist}/>
      <Route path="/grading" component={Grading}/>
      <Route path="/jerks" component={Jerks}/>
      <Route path="/plasticmon" component={PlasticMon}/>
      <Route path="/privacy" component={Privacy}/>
      <Route path="/security" component={Security}/>
      <Route path="/sonsign" component={SonSign}/>
      <Route path="/tye" component={Tye}/>
      <Route path="/varieties" component={Varieties}/>
      <Route path="/websiteman" component={WebsiteMan}/>
    </Route>
    <Route path="/services" component={AdditionalServices}>
      <Route path="appraisal" component={Appraisal}/>
      <Route path="market_research" component={MarketResearch}/>
      <Route path="subscription" component={SubscriptionService}/>
    </Route>
  </Route>
);

$(function() {
  var content = document.getElementById('root');
  if (content) {
    ReactDOM.render(<Router>{routes}</Router> , content);
  }
});
