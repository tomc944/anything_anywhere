var ItemIndexActions = require('../actions/item_index_actions'),
    ApiActions = require('../actions/api_actions');

var ApiUtilities = {
  //GET

  fetchAllProducts: function() {
    $.ajax({
      method: "GET",
      url: 'api/items',
      data: { requestOrigin: "searchAll" },
      dataType: 'json',
      success: function(resp) {
        ItemIndexActions.receiveAllItems();
      }
    });
  },

  //if this takes a hash of filters instead, and iterates through to chain the activerecord query
  fetchProductsByCategory: function(categories, constraints) {
    $.ajax({
      method: "GET",
      url: "api/items",
      data: { requestOrigin: "categoryLink",
              categories: categories,
              constraints: constraints },
      dataType: 'json',
      success: function(resp) {
        ItemIndexActions.receiveFilteredItems();
      }
    });
  },

  getEditableProduct: function(searchPhrase) {
    debugger
    $.ajax({
      method: "GET",
      url: "api/items",
      data: { requestOrigin: "productSearch",
              searchPhrase: searchPhrase },
      dataType: 'json',
      success: function(resp) {
        //
      }
    });
  },

  //POST

  createProduct: function(item) {
    $.ajax({
      method: "POST",
      url: "api/items",
      data: { item: item },
      dataType: 'json',
      success: function(resp) {
        debugger
        ApiActions.createProductResponse(resp);
      }
    });
  }


};

module.exports = ApiUtilities;
