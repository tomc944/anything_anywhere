var React = require('react'),
    FooterConstants = require('../../constants/footer_constants');

function animateScroll() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
};

var Footer = React.createClass({
  goToContact: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, "/contact");
  },

  goToOperate: function(e) {
    e.preventDefault();
    animateScroll();
    this.props.history.pushState(null, "/operate");
  },

  goToAdditionalInformation: function() {
    // this.props.history.pushState(null, "/coin_information");
  },

  goToServices: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, "/services");
  },

  componentDidMount: function() {
    $("#scroll-to-top").click(function(e) {
      e.preventDefault();
      animateScroll();
    });

    //add scroll to top fade in and out
    $(window).scroll(function() {
      if ($(this).scrollTop() > FooterConstants.scrollTopOffset) {
        $('#scroll-to-top').fadeIn(FooterConstants.scrollTopDuration);
      } else {
        $('#scroll-to-top').fadeOut(FooterConstants.scrollTopDuration);
      }
    });
  },

  render: function() {

    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-links container-fluid">
            <div className="row">
              <div className="col-xs-3 footer-link"><a data-toggle="modal" data-target="#aboutModal"><b>ABOUT AA</b></a></div>
              <div className="col-xs-3 footer-link"><a onClick={this.goToContact}>CONTACT</a></div>
              <div className="col-xs-3 footer-link"><a onClick={this.goToOperate}>BUYING & HOW I OPERATE</a></div>
              <div className="col-xs-3 footer-link"><a onClick={this.goToAdditionalInformation}>ADDITIONAL INFORMATION</a></div>
            </div>
            <div className="row">
              <div className="col-xs-3 footer-link"><a onClick={this.goToLinks}>LINKS - FRIENDS/COLLEAGUES</a></div>
              <div className="col-xs-3 footer-link"><a onClick={this.goToBlog}>MY BLOG</a></div>
              <div className="col-xs-3 footer-link"><a onClick={this.goToServices}>ADDITIONAL SERVICES</a></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© 2016 ANYTHING ANYWHERE.</div>


        <div id="scroll-to-top">Scroll to Top</div>
      </div>
    );
  }

});

module.exports = Footer;
