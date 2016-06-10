var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    ItemConstants = require('../constants/item_constants');
    ItemStore = new Store(Dispatcher);

var _items = [];
var _productCreationResponse = "";

ItemStore.getItems = function() {
  return _items.slice(0);
};

ItemStore.getCurrentEditSearch = function() {
  //
};

ItemStore.getProductCreationResponse = function() {
  return _productCreationResponse;
};

ItemStore.resetCreationResponse = function() {
  _productCreationResponse = "";
  return false;
}

ItemStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ItemConstants.RECEIVE_ALL_PRODUCTS:
      resetAllItems(payload.items);
      break;
    case ItemConstants.RECEIVE_FILTERED_ITEMS:
      resetAllItems(payload.items);
      break;
    case ItemConstants.PRODUCT_CREATED:
      showProductCreationResponse(payload.resp);
      break;
  }
};

function resetAllItems(items) {
  items = items;

  ItemStore.__emitChange();
};

function showProductCreationResponse(resp) {
  if (resp.id) {
    _productCreationResponse = "PRODUCT CREATED!";
  } else {
    _productCreationResponse = "There was an error."; //display resp error message
  }

  ItemStore.__emitChange();
};





module.exports = ItemStore;
