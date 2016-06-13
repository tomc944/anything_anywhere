var ApiUtilities = require('../utilities/api_utilities');

var EditProductActions = {
  editProduct: function(product) {
    ApiUtilities.editProduct(product);
  }
};

module.exports = EditProductActions;
