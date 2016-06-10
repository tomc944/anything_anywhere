var AppDispatcher = require('../dispatcher/dispatcher'),
    ItemConstants = require('../constants/item_constants');

var ApiActions = {
  createProductResponse: function(resp) {
    AppDispatcher.dispatch({
      actionType: ItemConstants.PRODUCT_CREATED,
      resp: resp
    });
  }
};

module.exports = ApiActions;
