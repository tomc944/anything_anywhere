var React = require('react');

var LandingPageNewArrivals = React.createClass({
  getInitialState: function() {
    return (this.props.landing_page_info);
  },

  render: function() {
    return (
      <ul className="landing-page-new-arrival-item col-xs-2">
        {this.state.name}
      </ul>
    );
  }
});

module.exports = LandingPageNewArrivals;
