var ApiUtilities = require('../utilities/api_utilities');

var SearchActions = {
  autoComplete: function(searchPhrase) {
    ApiUtilities.getSearchProduct(searchPhrase);
  }
};

module.exports = SearchActions;
