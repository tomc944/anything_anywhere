var React = require('react');

var HeaderSearchBar = React.createClass({
  render: function() {
    return (
      <div className="header-search-bar col-xs-3">
        <form className="form-group">
          <input type="text" className="form-control" placeholder = "SEARCH"/>
        </form>
      </div>
    );
  }


});

module.exports = HeaderSearchBar;
