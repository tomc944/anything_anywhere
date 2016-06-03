var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    ItemConstants = require('../constants/item_constants');
    ItemStore = new Store(Dispatcher);

var _items = [];

ItemStore.getItems = function() {
  return _items.slice(0);
};

ItemStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ItemConstants.RECEIVE_ALL_PRODUCTS:
      resetAllItems(payload.items)
      break;
    case ItemConstants.RECEIVE_FILTERED_ITEMS
      resetAllItems(payload.items)
      break;
  }
};

function resetAllItems(items) {
  items = items;

  ItemStore.__emitChange();
};





module.exports = ItemStore;
