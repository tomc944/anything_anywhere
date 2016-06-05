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

  render: function() {
    return (
      <div className="footer">
        <div className="footer-links container">
          <div className="row">
            <div className="col-xs-3" onClick={this.goToAbout}>FAQ link</div>
            <div className="col-xs-3" onClick={this.goToContact}>Contact</div>
            <div className="col-xs-3" onClick={this.goToOperate}>How We Operate</div>
            <div className="col-xs-3">Etc.</div>
          </div>
        </div>

        <div id="scroll-to-top">Scroll to Top</div>
      </div>
    );
  }

});

module.exports = Footer;
