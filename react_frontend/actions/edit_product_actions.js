var ApiUtilities = require('../utilities/api_utilities');

var EditProductActions = {
  autoComplete: function(searchPhrase) {
    ApiUtilities.getEditableProduct(searchPhrase);
  }
};

module.exports = EditProductActions;
