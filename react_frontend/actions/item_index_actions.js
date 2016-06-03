var AppDispatcher = require('../dispatcher/dispatcher');
var ItemConstants = require('../constants/item_constants');

var ItemIndexActions = {
  receiveAllItems: function() {
    AppDispatcher.dispatch({
      actionType: ItemsConstants.RECEIVE_ALL_ITEMS,
      items: items
    })
  },
  receiveFilteredItems: function() {
    AppDispatcher.dispatch({
      actionType: ItemConstants.RECEIVE_FILTERED_ITEMS,
      items: items
    })
  }
};

module.exports = ItemIndexActions;
