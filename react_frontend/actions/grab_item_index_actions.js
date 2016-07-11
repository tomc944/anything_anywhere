var ApiUtilities = require('../utilities/api_utilities');

var GrabItemIndexActions = {
  fetchItems: function(filters) {
    ApiUtilities.fetchProductsByCategory(filters.filter, filters.constraint);
  }
};

module.exports = GrabItemIndexActions;
