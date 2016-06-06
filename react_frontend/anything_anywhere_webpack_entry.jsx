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
    AdditionalInformation = require('./components/info/additional_information'),
    AdditionalServices = require('./components/info/additional_services'),
    A2Z = require('./commponents/info/additional_info_items/a2z'),
    Abbrev = require('./commponents/info/additional_info_items/abbrev'),
    Apprais = require('./commponents/info/additional_info_items/apprais'),
    BritabBrev = require('./commponents/info/additional_info_items/'),
    Buying = require('./commponents/info/additional_info_items/buying'),
    Clean = require('./commponents/info/additional_info_items/clean'),
    Collecting = require('./commponents/info/additional_info_items/collecting'),
    Faleri = require('./commponents/info/additional_info_items/faleri'),
    Finnist = require('./commponents/info/additional_info_items/finnist'),
    Grading = require('./commponents/info/additional_info_items/grading'),
    Jerks = require('./commponents/info/additional_info_items/jerks'),
    PlasticMon = require('./commponents/info/additional_info_items/plasticmon'),
    Privacy = require('./commponents/info/additional_info_items/privacy'),
    Security = require('./commponents/info/additional_info_items/security'),
    SonSign = require('./commponents/info/additional_info_items/sonsign'),
    Tye = require('./commponents/info/additional_info_items/tye'),
    Varieties = require('./commponents/info/additional_info_items/varieties'),
    WebsiteMan = require('./commponents/info/additional_info_items/websiteman');

var routes = (
  <Route path="/" component={HighLevelContainer}>
    <IndexRoute component={LandingPage}/>
    <Route path="/products" component={ItemIndex}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/operate" component={HowWeOperate}/>
    <Route path="/services" component={AdditionalServices}/>
    <Route path="/additional_information" component={AdditionalInformation}>
      <Route path="/a2z" component={A2Z}>
      <Route path="/abbrev" component={Abbrev}>
      <Route path="/apprais" component={Apprais}>
      <Route path="/britabbrev" component={BritabBrev}>
      <Route path="/buying" component={Buying}>
      <Route path="/clean" component={Clean}>
      <Route path="/collecting" component={Collecting}>
      <Route path="/faleri" component={Faleri}>
      <Route path="/finnist" component={Finnist}>
      <Route path="/grading" component={Grading}>
      <Route path="/jerks" component={Jerks}>
      <Route path="/plasticmon" component={PlasticMon}>
      <Route path="/privacy" component={Privacy}>
      <Route path="/security" component={Security}>
      <Route path="/sonsign" component={SonSign}>
      <Route path="/tye" component={Tye}>
      <Route path="/varieties" component={Varieties}>
      <Route path="/websiteman" component={WebsiteMan}>
    </Route>
  </Route>
);

$(function() {
  var content = document.getElementById('root');
  if (content) {
    ReactDOM.render(<Router>{routes}</Router> , content);
  }
});
