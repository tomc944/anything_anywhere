var ApiUtilities = require('../utilities/api_utilities');

var AddProductActions = {
  createProduct: function(product) {
    ApiUtilities.createProduct(product);
  }
};

module.exports = AddProductActions;
