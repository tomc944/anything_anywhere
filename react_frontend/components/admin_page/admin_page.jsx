var React = require('react');

var AdminPage = React.createClass({
  goToAddProduct: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, "/admin/add_product");
  },

  goToEditProduct: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, "/admin/edit_product");
  },

  goToManageAuctions: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, "/admin/manage_auction");
  },

  goToSettings: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, "/admin/settings");
  },

  render: function() {
    return (
      <div className="admin-page">
        <div className="admin-categories container-fluid">
          <div className="row">
            <div className="col-xs-3 admin-category" onClick={this.goToAddProduct}>Add Products</div>
            <div className="col-xs-3 admin-category" onClick={this.goToEditProduct}>Edit/Delete</div>
            <div className="col-xs-3 admin-category" onClick={this.goToManageAuctions}>Manage Auctions</div>
            <div className="col-xs-3 admin-category" onClick={this.goToSettings}>Settings</div>
          </div>
        </div>

        <div className="admin-children">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = AdminPage;
