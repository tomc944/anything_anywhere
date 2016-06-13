var React = require('react');

var HeaderCart = React.createClass({
  getInitialState: function() {
    return ({ itemCount: 0 });
  },

  goToCart: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, "/cart");
  },

  render: function() {
    return (
      <div className="col-xs-3">
        <div className="header-cart" onClick={this.goToCart}>
          Cart ({this.state.itemCount})
        </div>
      </div>
    );
  }


});

module.exports = HeaderCart;
