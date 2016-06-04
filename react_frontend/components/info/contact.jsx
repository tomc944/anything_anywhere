var React = require('react');

var Contact = React.createClass({
  render: function() {
    return (
      <div className="contact-container">
        <div className="contact">
          <h1>Contact Bob Reis.</h1>
          <br/>
          <h4>POB 26303 Raleigh NC 27611 USA</h4>
          <h4>Phone: <b>(919) 787-0881</b> (8:30AM-10:30PM EST only please)</h4>
          <br/>
          <h3>Email: <a href="mailto:reisbiz@earthlink.net"><b>reisbiz@earthlink.net.</b></a></h3>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
