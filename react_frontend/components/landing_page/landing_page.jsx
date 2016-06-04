var React = require('react'),
    LandingPageNewArrivals = require('./landing_page_new_arrivals');

    var sample = [];

    for (var i = 0; i < 20; i++) {
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

        <div className="landing-page-info">
          <h3>Trading in numismatics, etc. and dribbles of discourse.</h3>
          <h3><b>No cookies set. No data copied.</b> All business by email: <a href="mailto:reisbiz@earthlink.net"><b>reisbiz@earthlink.net.</b></a></h3>
          <h3>Everything in this business is done by <b>humans.</b></h3>
          <h3><b>Satisfaction guaranteed.</b></h3>
          <h3>I can read your emails in French, Spanish, Italian, etc. & German.</h3>
          <h3>I won&#39;t take advantage of your ignorance.</h3>
          <h3>We&#39;ll keep working on it until everyone is <b>happy</b> (or, more exactly, given the general situation, not unhappy).</h3>
        </div>

        <h3 id="new-arrivals">NEW ARRIVALS</h3>

        <div className="landing-page-new-arrivals container-fluid">
          <div className="row">
            {newArrivals}
          </div>
        </div>

      </div>
    );
  }

});

module.exports = LandingPage;
