var AppDispatcher = require('../dispatcher/dispatcher'),
    ItemConstants = require('../constants/item_constants'),
    ApiUtilities = require('../utilities/api_utilities');


var ItemIndexActions = {
  fetchItems: function(categories, constraints) {
    ApiUtilities.fetchProductsByCategory(categories, constraints);
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
