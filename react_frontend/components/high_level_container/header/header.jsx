var React = require('react'),
    HeaderSearchBar = require('./header_search_bar'),
    HeaderCategories = require('./header_categories'),
    LoginDropdown = require('./login_dropdown'),
    HeaderCart = require('./header_cart');

var Header = React.createClass({

  render: function() {
    return (
      <div className="header">

        <div className="header-top-bar container-fluid">
          <HeaderSearchBar/>
          <div className="header-title col-xs-6">
            <h3>ANYTHING ANYWHERE</h3>
          </div>
          <HeaderCart/>
        </div>

        <HeaderCategories/>

      </div>
    );
  }

});

module.exports = Header;
