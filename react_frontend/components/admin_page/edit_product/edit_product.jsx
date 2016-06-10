var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    EditProductActions = require('../../../actions/edit_product_actions.js'),
    EditProductItem = require('./edit_product_item'),
    ItemStore = require('../../../stores/item_store.js');

var EditProduct = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return (
      { search: "",
        results: []
      }
    );
  },

  componentDidMount: function() {
    this.eventListener = ItemStore.addListener(this._onNewSearch);
  },

  _onNewSearch: function() {
    this.setState({ results: ItemStore.getCurrentEditSearch() });
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
  },

  handleInput: function(e) {
    this.setState({ search: e.currentTarget.value });

    EditProductActions.autoComplete(e.currentTarget.value);
  },

  render: function() {
    var results = this.state.results.map(function(result, index) {
      return (
        <EditProductItem result={result} key={index}/>
      )
    });

    return (
      <div className="admin-edit-product">
        <div className="row">
          <div className="col-xs-offset-3 col-xs-3 admin-underline"></div>
        </div>

        <div className="admin-edit-search">
          <form>
            <label htmlFor="form-edit-search">PRODUCT SEARCH</label>
            <input className="form-control"
                 type="text"
                 id="form-edit-search"
                 value={this.state.value}
                 onChange={this.handleInput}
                 placeholder="Search"/>
          </form>
        </div>

        <div className="admin-edit">
          {results}
        </div>
      </div>
    );
  }

});

module.exports = EditProduct;
