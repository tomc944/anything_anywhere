var ApiUtilities = require('../utilities/api_utilities');

var AuctionActions = {
  retrieveAllAuctionItems: function() {
    ApiUtilities.retrieveAllAuctionItems();
  }
};

module.exports = AuctionActions;
