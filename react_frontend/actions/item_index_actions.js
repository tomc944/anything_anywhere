var ApiUtilities = require('../utilities/api_utilities');

var ItemIndexActions = {
  fetchAllProducts: function() {
    ApiUtilities.fetchAllProducts();
  }
};

module.exports = ItemIndexActions;
