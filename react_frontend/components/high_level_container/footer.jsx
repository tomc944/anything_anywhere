var React = require('react');

var Footer = React.createClass({
  goToAbout: function() {
    this.props.history.pushState(null, "/about");
  },

  goToContact: function() {
    this.props.history.pushState(null, "/contact");
  },

  goToOperate: function() {
    this.props.history.pushState(null, "/operate");
  },

  goToCoiinInformation: function() {
    this.props.history.pushState(null, "/coin_information")
  },

  render: function() {
    return (
      <div className="footer">
        <div className="footer-links container">
          <div className="row">
            <div className="col-xs-3" onClick={this.goToAbout}>About us</div>
            <div className="col-xs-3" onClick={this.goToContact}>Contact</div>
            <div className="col-xs-3" onClick={this.goToOperate}>How We Operate</div>
            <div className="col-xs-3">Etc.</div>
            <div classname="col-xs-3" onClick={this.goToCoinInformation}>Coin Information</div>
          </div>
        </div>

        <div id="scroll-to-top">Scroll to Top</div>
      </div>
    );
  }

});

module.exports = Footer;
