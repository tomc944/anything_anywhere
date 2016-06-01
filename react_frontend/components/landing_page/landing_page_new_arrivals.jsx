var React = require('react');

var LandingPageNewArrivals = React.createClass({
  getInitialState: function() {
    return (this.props.landing_page_info);
  },

  render: function() {
    return (
      <ul>
        {this.state.name}
      </ul>
    );
  }
});

module.exports = LandingPageNewArrivals;
