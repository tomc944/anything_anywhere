var React = require('react');

var AuctionProduct = React.createClass({
  removeFromAuction: function() {

  },

  render: function() {
    return (
      <div className="auction-item">
        <div>I am an auction product</div>
        <button onClick={this.removeFromAuction}>Remove From Auction</button>
      </div>
    );
  }
});

module.exports = AuctionProduct;
