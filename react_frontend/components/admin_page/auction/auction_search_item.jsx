var React = require('react');

var AuctionSearchItem = React.createClass({
  addToAuction: function() {

  },

  render: function() {
    return (
      <div className="auction-item">
        <div>I am an auction search item</div>
        <button onClick={this.addToAuction}>Add to Auction</button>
      </div>
    );
  }
});

module.exports = AuctionSearchItem;
