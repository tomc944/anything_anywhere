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
  fetchProductsByCategory: function(categories, constraints) {
    $.ajax({
      method: "GET",
      url: "api/items",
      data: { params: { categories: constraints } },
      dataType: 'json',
      success: function(resp) {
        ItemIndexActions.receiveFilteredItems();
      }
    });
  }
};

module.exports = ApiUtilities;
