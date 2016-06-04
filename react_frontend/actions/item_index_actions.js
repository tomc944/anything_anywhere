var AppDispatcher = require('../dispatcher/dispatcher'),
    ItemConstants = require('../constants/item_constants'),
    ApiUtilities = require('../utilities/api_utilities');


var ItemIndexActions = {
  fetchItems: function(filters) {
    ApiUtilities.fetchProductsByCategory(filters);
  },

  receiveAllItems: function() {
    AppDispatcher.dispatch({
      actionType: ItemsConstants.RECEIVE_ALL_ITEMS,
      items: items
    });
  },
  receiveFilteredItems: function() {
    AppDispatcher.dispatch({
      actionType: ItemConstants.RECEIVE_FILTERED_ITEMS,
      items: items
    });
  }
};

module.exports = ItemIndexActions;
