var AppDispatcher = require('../dispatcher/dispatcher'),
    ItemConstants = require('../constants/item_constants');

var ApiActions = {
  createProductResponse: function(resp) {
    AppDispatcher.dispatch({
      actionType: ItemConstants.PRODUCT_CREATED,
      resp: resp
    });
  },

  editProductResponse: function(resp) {
    AppDispatcher.dispatch({
      actionType: ItemConstants.PRODUCT_EDITED,
      resp: resp
    });
  },

  receiveProductSearch: function(resp) {
    AppDispatcher.dispatch({
      actionType: ItemConstants.PRODUCTS_SEARCH,
      resp: resp
    });
  },

  receiveAuctionProducts: function(resp) {
    AppDispatcher.dispatch({
      actionType: ItemConstants.AUCTION_PRODUCTS_RECEIVED,
      resp: resp
    });
  }
};

module.exports = ApiActions;
