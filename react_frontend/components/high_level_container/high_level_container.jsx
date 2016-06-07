var React = require('react'),
    Header = require('./header/header'),
    Footer = require('./footer');

var HighLevelAppComponent = React.createClass({
  render: function() {
    return (
      <div>

        <div className="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h3 className="modal-title" id="myModalLabel">ANYTHING ANYWHERE</h3>
              </div>
              <div className="modal-body">
                (example)Hi, my name is Bob Reis, and I have been in the numismatic business for X years. etc etc etc

                <br/>
                <br/>
                <p>In addition to shopping and for more information, visit these:</p>

                <ul>
                  <li>Contact me</li>
                  <li>Buying and how I operate - this includes information on how to order, terms for all commerce done at by me, and my thoughts on secure commerce, refunds and guarantees, grading, consignment, buying, and what things are worth. </li>
                  <li>Addition services - Attribution, authentication, grading, and appraisal services, and market research.</li>
                  <li>Links - I only put out links to places run by people I like </li>
                  <li>blog - I like to write and here are some of my thoughts on things</li>
                  <li>etc.</li>
                </ul>

                <br/>

                <p>You can find all of these links at the bottom as well.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <Header history={this.props.history}/>
        {this.props.children}
        <Footer history={this.props.history}/>
      </div>
    );
  }
});

module.exports = HighLevelAppComponent;
