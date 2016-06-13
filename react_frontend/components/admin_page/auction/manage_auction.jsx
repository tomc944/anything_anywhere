var React = require('react'),
    ReusableSearchComponent = require('../../reusable_search_component'),
    AuctionSearchItem = require('./auction_search_item'),
    ItemStore = require('../../../stores/item_store'),
    AuctionProduct = require('./auction_product'),
    AuctionActions = require('../../../actions/auction_actions');

var ManageAuction = React.createClass({
  getInitialState: function() {
    return (
      {
        searchResults: [],
        auctionItems: []
      }
    );
  },

  componentDidMount: function() {
    AuctionActions.retrieveAllAuctionItems();
    this.eventListener = ItemStore.addListener(this._handleChange);
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
    ItemStore.resetSearch();
  },

  _handleChange: function() {
    this.setState({ searchResults: ItemStore.getCurrentSearch(),
                    auctionItems: ItemStore.getAuctionItems() });
  },

  render: function() {
    var searchResults = this.state.searchResults.map(function(result, index) {
      return (
        <AuctionSearchItem result={result} key={index} number={index}/>
      )
    });

    var auctionItems = this.state.auctionItems.map(function(result, index) {
      return (
        <AuctionProduct result={result} key={index} number={index}/>
      )
    });

    var resultsCount;
    if (searchResults.length === 1) {
      resultsCount = <h3>1 product match</h3>;
    } else {
      resultsCount = <h3>{searchResults.length} product matches</h3>;
    };

    var auctionCount;
    if (auctionItems.length === 1) {
      auctionCount = <h3>1 item in auction</h3>;
    } else {
      auctionCount = <h3>{auctionItems.length} items in auction</h3>;
    };

    return (
      <div className="admin-auction">
        <div className="col-xs-offset-6 col-xs-3 admin-underline"></div>

        <div className="admin-auction-search">
          <h4>AUCTION SEARCH</h4>
          <ReusableSearchComponent/>
        </div>

        <div className="admin-auction-note">
          <p>Type to search by denomination, dynasty, mint, and more. Can search using the header search bar as well. Products that contain the phrase will be shown below.</p>
        </div>

        <div className="admin-auction-search-items">
          {resultsCount}
          {searchResults}
        </div>

        <div className="auction-divider"></div>

        <div className="admin-auction-items">
          {auctionCount}
          {auctionItems}
        </div>
      </div>
    );
  }

});

module.exports = ManageAuction;
