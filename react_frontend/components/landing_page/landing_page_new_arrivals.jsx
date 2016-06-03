var React = require('react');

var LandingPageNewArrivals = React.createClass({
  getInitialState: function() {
    return (this.props.landing_page_info);
  },

  render: function() {
    return (
      <div className="col-xs-3 col-md-2">
        <div className="thumbnail">
          <img src="..." alt="..."/>
          <div className="caption">
            <h4>{this.state.name}</h4>
            <p>...</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LandingPageNewArrivals;
