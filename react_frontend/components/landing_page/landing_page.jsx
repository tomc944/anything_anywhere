var React = require('react'),
    LandingPageNewArrivals = require('./landing_page_new_arrivals');

var LandingPage = React.createClass({
  getInitialState: function() {
    return ({ newArrivals: [{name: "i am test arrival1"}, {name: "i am test arrival2"}] });
  },

  componentDidMount: function() {
    // get new Arrivals
  },

  render: function() {
    var newArrivals = this.state.newArrivals.map(function(product, index) {
      return <LandingPageNewArrivals landing_page_info={product} key={index}/>;
    });

    console.log(newArrivals);

    return (
      <div>
        <div>I am the carousel.</div>
        <div>
          New Arrivals
          <ul>
            {newArrivals}
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = LandingPage;
