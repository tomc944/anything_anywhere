var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    EditProductActions = require('../../../actions/edit_product_actions');

var EditProductItem = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {

    //some attributes on this.props.result are null so the startAttrs object is having errors, we must overwrite to an empty string
    for (var k in this.props.result) {
      if (typeof this.props.result[k] !== "undefined") {
        //do nothing
      } else {
        this.props.result[k] = "";
      }
    }

    startAttrs = {
      id: this.props.result.id,
      weight: this.props.result.weight,
      list: this.props.result.list,
      number: this.props.result.number,
      country: this.props.result.country,
      region: this.props.result.region,
      dynasty: this.props.result.dynasty,
      denomination: this.props.result.denomination,
      date: this.props.result.date,
      mintmark: this.props.result.mintmark,
      mint: this.props.result.mint,
      obverse: this.props.result.obverse,
      reverse: this.props.result.reverse,
      edge: this.props.result.edge,
      material: this.props.result.material,
      diameter: this.props.result.diamter,
      actual_metal_weight: this.props.result.actual_metal_weight,
      comment_1: this.props.result.comment_1,
      catalog: this.props.result.catalog,
      comment_2: this.props.result.comment_2,
      grade: this.props.result.grade,
      wholesale: this.props.result.wholesale,
      price: this.props.result.price,
      quantity: this.props.result.quantity,
      unit_cost: this.props.result.unit_cost,
      total_cost: this.props.result.total_cost,
      quantity_sold: this.props.result.quantity_sold,
      hold_1: this.props.result.hold_1,
      hold_2: this.props.result.hold_2,
      source: this.props.result.source,
      date_purchased: this.props.result.date_purchased,
      picture: this.props.result.picture,
      date_sold: this.props.result.date_sold,
      comment_3: this.props.result.comment_3,
      comment_4: this.props.result.comment_4,
      category: this.props.result.category,
      subcategory: this.props.result.subcategory,
      comment_5: this.props.result.comment_5,
      consignment: this.props.result.consignment,
      editStatus: ""
    };

    return startAttrs;
  },

  componentDidMount: function() {
    this.itemListener = ItemStore.addListener(this._receiveEditResponse);
  },

  componentWillUnmount: function() {
    this.itemListener.remove();
    ItemStore.resetResponse();
  },

  _receiveEditResponse: function() {
    this.setState({ editStatus: ItemStore.getResponse() })
  },

  submitEdit: function(e) {
    e.preventDefault();

    var productProperties = this.state;
    delete productProperties.editStatus;

    EditProductActions.editProduct(productProperties);
  },

  render: function() {
    return (
      <div>
        <div className = "admin-edit-product">
          <h4>Product {this.props.number + 1}:</h4>
          <form onSubmit={this.submitEdit}>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-4">
                  <button id="image-button"
                  onClick={this.addImage}
                  className="btn btn-default">
                  EDIT PRODUCT IMAGE
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4">
                  <label htmlFor="form-weight">WEIGHT</label>
                  <input className="form-control"
                         type="text"
                         id="form-weight"
                         valueLink={this.linkState('weight')}
                         placeholder=""/>
                </div>

                <div className="col-xs-4">
                 <label htmlFor="form-list">LIST</label>
                 <input className="form-control"
                        type="text"
                        id="form-list"
                        valueLink={this.linkState('list')}
                        placeholder=""/>
                </div>

                <div className="col-xs-4">
                  <label htmlFor="form-number">NUMBER</label>
                  <input className="form-control"
                         type="text"
                         id="form-number"
                         valueLink={this.linkState('number')}
                         placeholder=""/>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4">
                  <label htmlFor="form-country">COUNTRY</label>
                  <input className="form-control"
                         type="text"
                         id="form-country"
                         valueLink={this.linkState('country')}
                         placeholder=""/>
                </div>

                <div className="col-xs-4">
                  <label htmlFor="form-region">REGION</label>
                  <input className="form-control"
                        type="text"
                        id="form-region"
                        valueLink={this.linkState('region')}
                        placeholder=""/>
                </div>

                <div className="col-xs-4">
                  <label htmlFor="form-dynasty">DYNASTY</label>
                  <input className="form-control"
                         type="text"
                         id="form-dynasty"
                         valueLink={this.linkState('dynasty')}
                         placeholder=""/>
                </div>
              </div>

                <div className="row">
                  <div className="col-xs-4">
                    <label htmlFor="form-denomination">DENOMINATION</label>
                    <input className="form-control"
                           type="text"
                           id="form-denomination"
                           valueLink={this.linkState('denomination')}
                           placeholder=""/>
                  </div>

                 <div className="col-xs-4">
                   <label htmlFor="form-date">DATE</label>
                   <input className="form-control"
                          type="text"
                          id="form-date"
                          valueLink={this.linkState('date')}
                          placeholder=""/>
                  </div>

                  <div className="col-xs-4">
                    <label htmlFor="form-mintmark">MINTMARK</label>
                    <input className="form-control"
                           type="text"
                           id="form-mintmark"
                           valueLink={this.linkState('mintmark')}
                           placeholder=""/>
                  </div>
                </div>

                  <div className="row">
                    <div className="col-xs-4">
                      <label htmlFor="form-mint">MINT</label>
                      <input className="form-control"
                             type="text"
                             id="form-mint"
                             valueLink={this.linkState('mint')}
                             placeholder=""/>
                   </div>

                   <div className="col-xs-4">
                     <label htmlFor="form-obverse">OBVERSE</label>
                     <input className="form-control"
                            type="text"
                            id="form-obverse"
                            valueLink={this.linkState('obverse')}
                            placeholder=""/>
                   </div>

                   <div className="col-xs-4">
                     <label htmlFor="form-reverse">REVERSE</label>
                     <input className="form-control"
                        type="text"
                        id="form-reverse"
                        valueLink={this.linkState('reverse')}
                        placeholder=""/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-4">
                      <label htmlFor="form-edge">EDGE</label>
                      <input className="form-control"
                             type="text"
                             id="form-edge"
                             valueLink={this.linkState('edge')}
                             placeholder=""/>
                   </div>

                   <div className="col-xs-4">
                     <label htmlFor="form-material">MATERIAL</label>
                     <input className="form-control"
                            type="text"
                            id="form-material"
                            valueLink={this.linkState('material')}
                            placeholder=""/>
                   </div>

                   <div className="col-xs-4">
                     <label htmlFor="form-diameter">DIAMETER</label>
                     <input className="form-control"
                            type="text"
                            id="form-diameter"
                            valueLink={this.linkState('diameter')}
                            placeholder=""/>
                   </div>
                 </div>

                 <div className="row">
                   <div className="col-xs-4">
                     <label htmlFor="form-actual-metal-weight">ACTUAL_METAL_WEIGHT</label>
                     <input className="form-control"
                            type="text"
                            id="form-actual-metal-weight"
                            valueLink={this.linkState('actual_metal_weight')}
                            placeholder=""/>
                   </div>

                  <div className="col-xs-4">
                    <label htmlFor="form-comment1">COMMENT_1</label>
                    <input className="form-control"
                           type="text"
                           id="form-comment1"
                           valueLink={this.linkState('comment_1')}
                           placeholder=""/>
                  </div>

                   <div className="col-xs-4">
                     <label htmlFor="form-catalog">CATALOG</label>
                     <input className="form-control"
                            type="text"
                            id="form-catalog"
                            valueLink={this.linkState('catalog')}
                            placeholder=""/>
                  </div>
                </div>

                  <div className="row">
                    <div className="col-xs-4">
                      <label htmlFor="form-comment2">COMMENT_2</label>
                      <input className="form-control"
                             type="text"
                             id="form-comment2"
                             valueLink={this.linkState('comment_2')}
                             placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                      <label htmlFor="form-grade">GRADE</label>
                      <input className="form-control"
                             type="text"
                             id="form-grade"
                             valueLink={this.linkState('grade')}
                             placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                      <label htmlFor="form-wholesale">WHOLESALE</label>
                      <input className="form-control"
                             type="text"
                             id="form-wholesale"
                             valueLink={this.linkState('wholesale')}
                             placeholder=""/>
                    </div>
                  </div>

                    <div className="row">
                     <div className="col-xs-4">
                       <label htmlFor="form-price">PRICE</label>
                       <input className="form-control"
                              type="text"
                              id="form-price"
                              valueLink={this.linkState('price')}
                              placeholder=""/>
                     </div>

                    <div className="col-xs-4">
                      <label htmlFor="form-quantity">QUANTITY</label>
                      <input className="form-control"
                             type="text"
                             id="form-quantity"
                             valueLink={this.linkState('quantity')}
                             placeholder=""/>
                   </div>

                   <div className="col-xs-4">
                     <label htmlFor="form-unit-cost">UNIT_COST</label>
                     <input className="form-control"
                            type="text"
                            id="form-unit-cost"
                            valueLink={this.linkState('unit_cost')}
                            placeholder=""/>
                   </div>
                 </div>

                   <div className="row">
                     <div className="col-xs-4">
                       <label htmlFor="form-total-cost">TOTAL_COST</label>
                       <input className="form-control"
                              type="text"
                              id="form-total-cost"
                              valueLink={this.linkState('total_cost')}
                              placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                      <label htmlFor="form-quantity-sold">QUANTITY_SOLD</label>
                      <input className="form-control"
                             type="text"
                             id="form-quantity-sold"
                             valueLink={this.linkState('quantity_sold')}
                             placeholder=""/>
                    </div>

                     <div className="col-xs-4">
                      <label htmlFor="form-hold1">HOLD_1</label>
                      <input className="form-control"
                             type="text"
                             id="form-hold1"
                             valueLink={this.linkState('hold_1')}
                             placeholder=""/>
                     </div>
                   </div>

                  <div className="row">
                    <div className="col-xs-4">
                      <label htmlFor="form-hold2">HOLD_2</label>
                      <input className="form-control"
                             type="text"
                             id="form-hold2"
                             valueLink={this.linkState('hold_2')}
                             placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                      <label htmlFor="form-source">SOURCE</label>
                      <input className="form-control"
                             type="text"
                             id="form-source"
                             valueLink={this.linkState('source')}
                             placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                      <label htmlFor="form-date-purchased">DATE_PURCHASED</label>
                      <input className="form-control"
                             type="text"
                             id="form-date-purchased"
                             valueLink={this.linkState('date_purchased')}
                             placeholder=""/>
                    </div>
                  </div>

                    <div className="row">
                      <div className="col-xs-4">
                       <label htmlFor="form-consignment">CONSIGNMENT</label>
                       <input className="form-control"
                              type="text"
                              id="form-consignment"
                              valueLink={this.linkState('consignment')}
                              placeholder=""/>
                      </div>

                       <div className="col-xs-4">
                         <label htmlFor="form-sold">DATE_SOLD</label>
                         <input className="form-control"
                                type="text"
                                id="form-sold"
                                valueLink={this.linkState('date_sold')}
                                placeholder=""/>
                      </div>

                      <div className="col-xs-4">
                        <label htmlFor="form-comment3">COMMENT_3</label>
                        <input className="form-control"
                               type="text"
                               id="form-comment3"
                               valueLink={this.linkState('comment_3')}
                               placeholder=""/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-4">
                        <label htmlFor="form-comment4">COMMENT_4</label>
                        <input className="form-control"
                               type="text"
                               id="form-comment4"
                               valueLink={this.linkState('comment_4')}
                               placeholder=""/>
                      </div>

                      <div className="col-xs-4">
                        <label htmlFor="form-category">CATEGORY</label>
                        <input className="form-control"
                               type="text"
                               id="form-category"
                               valueLink={this.linkState('category')}
                               placeholder=""/>
                      </div>


                      <div className="col-xs-4">
                        <label htmlFor="form-subcategory">SUBCATEGORY</label>
                        <input className="form-control"
                               type="text"
                               id="form-subcategory"
                               valueLink={this.linkState('subcategory')}
                               placeholder=""/>
                     </div>
                   </div>

                  <div className="row">
                    <div className="col-xs-4">
                      <label htmlFor="form-comment5">COMMENT_5</label>
                      <input className="form-control"
                             type="text"
                             id="form-comment5"
                             valueLink={this.linkState('comment_5')}
                             placeholder=""/>
                    </div>
                  </div>

                  <button type="submit" id="product-submit" className="btn btn-primary form-button btn-lg btn-block">Edit Product</button>
                </div>
              </form>

              <div className="product-creation-status">
                {this.state.editStatus}
              </div>
          </div>
      </div>
    );
  }

});

module.exports = EditProductItem;
