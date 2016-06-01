var React = require('react'),
    HeaderSearchBar = require('./header_search_bar'),
    HeaderCategories = require('./header_categories'),
    LoginDropdown = require('./login_dropdown.jsx');

var Header = React.createClass({

  render: function() {
    return (
      <div>
        <HeaderSearchBar/>
        <div>Anything Anywhere</div>
        <HeaderCategories/>
        <div>
          Cart Button
        </div>
        <LoginDropdown/>
      </div>
    );
  }

});

module.exports = Header;
