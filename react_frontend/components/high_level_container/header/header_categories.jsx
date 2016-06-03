var React = require('react'),
    LoginDropdown = require('./login_dropdown');

var HeaderCategories = React.createClass({
  render: function() {
    return (
      <div className="header-categories container">
        <div className="col-xs-2 test">Category</div>
        <div className="col-xs-2 test">Category</div>
        <div className="col-xs-2 test">Category</div>
        <div className="col-xs-2 test">Category</div>
        <div className="col-xs-2 test">Category</div>
        <LoginDropdown/>
      </div>
    );
  }

});

module.exports = HeaderCategories;
