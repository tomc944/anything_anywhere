var React = require('react');

var AdditionalServices = React.createClass({
  openAppraisal: function() {
    this.props.history.pushState(null, "services/appraisal");
  },

  openMarketResearch: function() {
    this.props.history.pushState(null, "services/market_research");
  },

  openSubscriptionService: function() {
    this.props.history.pushState(null, "services/subscription");
  },

  render: function() {
    return (
      <div>
        <div className="services-links">
          <div><a className="service-links-link" onClick={this.openAppraisal}>APPRAISAL, ATTRIBUTION, & AUTHENTICATION SERVICES</a></div>
          <div><a className="service-links-link" onClick={this.openMarketResearch}>MARKET RESEARCH</a></div>
          <div><a className="service-links-link" onClick={this.openSubscriptionService}>SUBSCRIPTION SERVICE</a></div>
        </div>

        {this.props.children}
      </div>
    );
  }


});

module.exports = AdditionalServices;
