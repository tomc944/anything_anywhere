var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ReusableSearchComponent = require('../../reusable_search_component'),
    EditProductItem = require('./edit_product_item'),
    ItemStore = require('../../../stores/item_store.js');

var EditProduct = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return (
      {
        results: []
      }
    );
  },

  componentDidMount: function() {
    this.eventListener = ItemStore.addListener(this._onNewSearch);
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
    ItemStore.resetSearch();
  },

  _onNewSearch: function() {
    this.setState({ results: ItemStore.getCurrentSearch() });
  },

  render: function() {
    var results = this.state.results.map(function(result, index) {
      return (
        <EditProductItem result={result} key={index} number={index}/>
      )
    });

    var resultsCount;
    if (results.length === 1) {
      resultsCount = <h3>1 product match</h3>;
    } else {
      resultsCount = <h3>{results.length} product matches</h3>;
    };

    return (
      <div className="admin-edit-product">
        <div className="row">
          <div className="col-xs-offset-3 col-xs-3 admin-underline"></div>
        </div>

        <div className="admin-edit-search">
          <h4>PRODUCT SEARCH</h4>
          <ReusableSearchComponent/>
        </div>

        <div className="admin-edit-note">
          <p>Type to search by denomination, dynasty, mint, and more. Can search using the header search bar as well. Products that contain the phrase will be shown below.</p>
        </div>

        <div className="admin-edit">
          {resultsCount}
          {results}
        </div>
      </div>
    );
  }

});

module.exports = EditProduct;
