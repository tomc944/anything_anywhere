var React = require('react');

var HeaderCart = React.createClass({
  getInitialState: function() {
    return ({ itemCount: 0 });
  },

  render: function() {
    return (
      <div className="col-xs-3">
        <div className="header-cart">
          Cart ({this.state.itemCount})
        </div>
      </div>
    );
  }


});

module.exports = HeaderCart;
