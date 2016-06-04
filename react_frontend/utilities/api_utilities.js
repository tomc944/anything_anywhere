var ItemIndexActions = require('../actions/item_index_actions');

var ApiUtilities = {
  fetchAllProducts: function() {
    $.ajax({
      method: "GET",
      url: 'api/items',
      dataType: 'json',
      success: function(resp) {
        ItemIndexActions.receiveAllItems();
      }
    });
  }

  //if this takes a hash of filters instead, and iterates through to chain the activerecord query
  fetchProductsByCategory: function(categories, constraints) {
    $.ajax({
      method: "GET",
      url: "api/items",
      data: { categories: categories, constraints: constraints },
      dataType: 'json',
      success: function(resp) {
        ItemIndexActions.receiveFilteredItems();
      }
    });
  }
};

module.exports = ApiUtilities;
