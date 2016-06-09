var React = require('react');

var AddProduct = React.createClass({
  getInitialState: function() {
    return ({ products: [] })
  },

  render: function() {
    return (
      <div className="admin-add-product">
        <div className="col-xs-3 admin-underline">

        </div>
      </div>
    );
  }

});

module.exports = AddProduct;
