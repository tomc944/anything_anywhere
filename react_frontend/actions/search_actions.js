var ApiUtilities = require('../utilities/api_utilities');

var SearchActions = {
  autoComplete: function(searchPhrase) {
    ApiUtilities.getEditableProduct(searchPhrase);
  }
};

module.exports = SearchActions;
