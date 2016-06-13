var React = require('react'),
    ReusableSearchComponent = require('../../reusable_search_component');

var HeaderSearchBar = React.createClass({
  render: function() {
    return (
      <div className="header-search-bar col-xs-3">
        <ReusableSearchComponent/>
      </div>
    );
  }


});

module.exports = HeaderSearchBar;
