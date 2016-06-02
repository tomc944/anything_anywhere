var React = require('react'),
    ItemStore = require('../../stores/item_store'),
    ItemIndexActions = require('../../actions/item_index_actions');

var ItemIndex = React.createClass({
  getInitialState: function() {
    return ({
      products: [],
      categoryTitle: ""
    });
  },

  componentDidMount: function() {
    this.itemListener = ItemStore.addListener(this._handleChange);
    ItemIndexActions.fetchAllProducts();
  },

  handleChange: function() {
    this.setState({ products: ItemStore.getItems() });
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
