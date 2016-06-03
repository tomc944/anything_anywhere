var React = require('react');

var HeaderCart = React.createClass({

  render: function() {
    return (
      <div className="header-cart col-xs-3">
        Cart Button <span className="badge">#</span>
      </div>
    );
  }


});

module.exports = HeaderCart;
