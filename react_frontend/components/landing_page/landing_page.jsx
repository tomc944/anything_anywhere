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
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img data-src="..." alt="First slide">
            </div>
            <div class="carousel-item">
              <img data-src="..." alt="Second slide">
            </div>
            <div class="carousel-item">
              <img data-src="..." alt="Third slide">
            </div>
          </div>
          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="icon-prev" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="icon-next" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
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
