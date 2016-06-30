var React = require('react'),
    ItemStore = require('../../stores/item_store'),
    FilterStore = require('../../stores/filter_store'),
    GrabItemIndexActions = require('../../actions/grab_item_index_actions');

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
    GrabItemIndexActions.fetchItems(FilterStore.getAllFilters());
  },

  componentWillUmount: function() {
    this.itemListener.remove();
  },

  render: function() {
    return (
      <div>
        {this.state.categoryTitle.text}
      </div>
    );
  }
});

module.exports = ItemIndex;
