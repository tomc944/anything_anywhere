var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var AddProduct = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    productName: "",

  },

  getInitialState: function() {
    return this.blankAttrs;
  },

  render: function() {
    return (
      <div className="admin-add-product">
        <div className="row">
          <div className="col-xs-3 admin-underline"></div>
        </div>
        <div className="row">
          <div className = "admin-add-product">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-title">Product Name:</label>
                <input className="form-control"
                       type="text"
                       id="form-title"
                       valueLink={this.linkState('productName')}
                       placeholder=""/>

                <label htmlFor="form-location">sdflk</label>
                <input valueLink={this.linkState('location')}
                       className="form-control"
                       id="form-location"
                       placeholder="enter your event address"
                       type="text"/>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = AddProduct;
