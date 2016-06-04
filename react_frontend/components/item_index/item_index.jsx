var React = require('react'),
    ItemStore = require('../../stores/item_store'),
    FilterStore = require('../../stores/filter_store'),
    ItemIndexActions = require('../../actions/item_index_actions');

function _getAllItems () {
  ItemStore.getItems();
};

var ItemIndex = React.createClass({
  getInitialState: function() {
    return ({
      items: _getAllItems(),
      categoryTitle: FilterStore.getCategory()
    });
  },

  _handleChange: function() {

  },

  componentDidMount: function() {
    this.itemListener = ItemStore.addListener(this._handleChange);
    ItemIndexActions.fetchItems(FilterStore.getAllFilters());
  },

  componentWillUmount: function() {
    this.itemListener.remove();
  },

  render: function() {

    return (
      <div>
        {this.state.categoryTitle}
      </div>
    );
  }
});

module.exports = ItemIndex;
