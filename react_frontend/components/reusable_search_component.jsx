var React = require('react'),
    SearchActions = require('../actions/search_actions');


var ReusableSearchComponent = React.createClass({
  getInitialState: function() {
    return ({ search: "" });
  },
  
  handleInput: function(e) {
    this.setState({ search: e.currentTarget.value });

    SearchActions.autoComplete(e.currentTarget.value);
  },

  render: function () {
    return (
      <form>
        <input className="form-control"
             type="text"
             id="reusable-search"
             value={this.state.value}
             onChange={this.handleInput}
             placeholder="Search"/>
      </form>
    );
  }

});

module.exports = ReusableSearchComponent;
