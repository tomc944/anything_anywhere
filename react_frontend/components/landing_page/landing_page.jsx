var React = require('react'),
    LandingPageNewArrivals = require('./landing_page_new_arrivals');

    var sample = [];

    for (var i = 0; i < 50; i++) {
      sample.push({name: "i am a test arrival"});
    }

var LandingPage = React.createClass({
  getInitialState: function() {
    return ({ newArrivals: sample });
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
      <div className="landing-page">

        <div id="landing-page-carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#landing-page-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#landing-page-carousel" data-slide-to="1"></li>
            <li data-target="#landing-page-carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img data-src="..." alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img data-src="..." alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img data-src="..." alt="Third slide"/>
            </div>
          </div>
          <a className="left carousel-control" href="#landing-page-carousel" role="button" data-slide="prev">
            <span className="icon-prev" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#landing-page-carousel" role="button" data-slide="next">
            <span className="icon-next" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <h3>NEW ARRIVALS</h3>

        <div className="landing-page-new-arrivals container">
          <div className="row">
            <ul>
              {newArrivals}
            </ul>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = LandingPage;
