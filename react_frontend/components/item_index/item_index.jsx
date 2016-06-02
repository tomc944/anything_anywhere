var React = require('react'),
    ItemStore = require('../../stores/item_store');

var ItemIndex = React.createClass({
  getInitialState: function() {
    return ({
      products: [],
      categoryTitle: ""
    });
  },

  componentDidMount: function() {
    this.productListener = ItemStore.addListener(this._handleChange);
  },

  render: function() {
    return (
      <div>
        Category Title
      </div>
    );
  }
});

module.exports = ItemIndex;
