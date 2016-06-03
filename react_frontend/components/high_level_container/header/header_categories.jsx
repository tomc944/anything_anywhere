var React = require('react'),
    LoginDropdown = require('./login_dropdown');

var HeaderCategories = React.createClass({
  render: function() {
    return (
      <div className="header-categories container">
        <div className="col-xs-2 category-titles">Category</div>
        <div className="col-xs-2 category-titles">Category</div>
        <div className="col-xs-2 category-titles">Category</div>
        <div className="col-xs-2 category-titles">Category</div>
        <div className="col-xs-2 category-titles">Category</div>
        <LoginDropdown/>
      </div>
    );
  }

});

module.exports = HeaderCategories;
