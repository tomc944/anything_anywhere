var React = require('react'),
    Header = require('./header/header'),
    Footer = require('./footer');

var HighLevelAppComponent = React.createClass({
  render: function() {
    return (
      <div>
        <Header history={this.props.history}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

module.exports = HighLevelAppComponent;
