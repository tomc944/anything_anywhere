var React = require('react'),
    HeaderSearchBar = require('./header_search_bar'),
    HeaderCategories = require('./header_categories'),
    LoginDropdown = require('./login_dropdown'),
    HeaderCart = require('./header_cart');

var Header = React.createClass({
  goToLandingPage: function() {
    this.props.history.pushState(null, "/");
  },

  render: function() {
    return (
      <div className="header">

        <div className="header-top-bar container-fluid">
          <HeaderSearchBar/>
          <div className="header-title col-xs-6">
            <h3 id="logo" onClick={this.goToLandingPage}>ANYTHING ANYWHERE</h3>
            <p>since 1978</p>
          </div>
          <HeaderCart/>
        </div>
        <LoginDropdown/>

        <HeaderCategories history={this.props.history}/>

      </div>
    );
  }

});

module.exports = Header;
