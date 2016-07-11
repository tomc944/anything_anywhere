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
        ItemIndexActions.receiveFilteredItems(resp);
      }
    });
  },

  getSearchProduct: function(searchPhrase) {
    $.ajax({
      method: "GET",
      url: "api/items",
      data: { requestOrigin: "productSearch",
              searchPhrase: searchPhrase },
      dataType: 'json',
      success: function(resp) {
        ApiActions.receiveProductSearch(resp);
      }
    });
  },

  retrieveAllAuctionItems: function() {
    $.ajax({
      method: "GET",
      url: "api/items",
      data: { requestOrigin: "auction" },
      dataType: 'json',
      success: function(resp) {
        ApiActions.receiveAuctionProducts(resp);
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
        ApiActions.createProductResponse(resp);
      }
    });
  },

  //PATCH

  editProduct: function(item) {
    $.ajax({
      method: "PATCH",
      url: "api/items/" + item.id,
      data: { item: item },
      dataType: 'json',
      success: function(resp) {
        ApiActions.editProductResponse(resp);
      }
    });
  }

};

module.exports = ApiUtilities;
