var React = require('react');

var Footer = React.createClass({
  goToContact: function() {
    this.props.history.pushState(null, "/contact");
  },

  goToOperate: function() {
    this.props.history.pushState(null, "/operate");
  },

  goToAdditionalInformation: function() {
    // this.props.history.pushState(null, "/coin_information");
  },

  goToServices: function() {
    this.props.history.pushState(null, "/services");
  },

  render: function() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-links container">
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

        <div id="scroll-to-top">Scroll to Top</div>
      </div>
    );
  }

});

module.exports = Footer;
