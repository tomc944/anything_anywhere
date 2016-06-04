var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer">
        <div className="footer-links container">
          <div className="row">
            <div className="col-xs-3">FAQ link</div>
            <div className="col-xs-3">Contact</div>
            <div className="col-xs-3">How We Operate</div>
            <div className="col-xs-3">Etc.</div>
          </div>
        </div>

        <div id="scroll-to-top">Scroll to Top</div>
      </div>
    );
  }

});

module.exports = Footer;
