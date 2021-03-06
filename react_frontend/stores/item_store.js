var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    ItemConstants = require('../constants/item_constants');
    ItemStore = new Store(Dispatcher);

var _items = [];
var _productResponse = "";
var _searchProducts = [];
var _auctionProducts = [];

ItemStore.getItems = function() {
  return _items.slice(0);
};

ItemStore.getCurrentSearch = function() {
  return _searchProducts.slice(0);
};

ItemStore.getAuctionItems = function() {
  return _auctionProducts.slice(0);
};

ItemStore.getResponse = function() {
  return _productResponse;
};

ItemStore.resetResponse = function() {
  _productResponse = "";
  return false;
};

ItemStore.resetSearch = function() {
  _searchProducts = [];
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
    case ItemConstants.PRODUCT_EDITED:
      showProductEditResponse(payload.resp);
      break;
    case ItemConstants.PRODUCTS_SEARCH:
      resetSearchProducts(payload.resp);
      break;
    case ItemConstants.AUCTION_PRODUCTS_RECEIVED:
      resetAuctionProducts(payload.resp);
      break;
  }
};

function resetAllItems(items) {
  _items = items;

  ItemStore.__emitChange();
};

function showProductCreationResponse(resp) {
  if (resp.id) {
    _productResponse = "PRODUCT CREATED!";
  } else {
    _productResponse = "There was an error."; //display resp error message
  }

  ItemStore.__emitChange();
};

function showProductEditResponse(resp) {
  if (resp.id) {
    _productResponse = "PRODUCT EDITED!";
  } else {
    _productResponse = "There was an error."; //display resp error message
  }

  ItemStore.__emitChange();
};

function resetSearchProducts(products) {
  _searchProducts = products;

  ItemStore.__emitChange();
};

function resetAuctionProducts(auctionProducts) {
  _auctionProducts = auctionProducts;

  ItemStore.__emitChange();
};



module.exports = ItemStore;
