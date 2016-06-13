var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    AddProductActions = require('../../actions/add_product_actions'),
    ItemStore = require('../../stores/item_store');

var AddProduct = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    weight: "",
    list: "",
    number: "",
    country: "",
    region: "",
    dynasty: "",
    denomination: "",
    date: "",
    mintmark: "",
    mint: "",
    obverse: "",
    reverse: "",
    edge: "",
    material: "",
    diameter: "",
    actual_metal_weight: "",
    comment_1: "",
    catalog: "",
    comment_2: "",
    grade: "",
    wholesale: "",
    price: "",
    quantity: "",
    unit_cost: "",
    total_cost: "",
    quantity_sold: "",
    hold_1: "",
    hold_2: "",
    source: "",
    date_purchased: "",
    picture: "",
    date_sold: "",
    comment_3: "",
    comment_4: "",
    category: "",
    subcategory: "",
    comment_5: "",
    consignment: "",
    auction: false,
    productionCreationStatus: ""
  },

  getInitialState: function() {
    return this.blankAttrs;
  },

  componentDidMount: function() {
    this.itemListener = ItemStore.addListener(this._receiveProductCreationResponse);
  },

  componentWillUnmount: function() {
    this.itemListener.remove();
    ItemStore.resetResponse();
  },

  _receiveProductCreationResponse: function() {
    this.setState({ productionCreationStatus: ItemStore.getResponse() });
  },

  chooseCSV: function() {
    document.getElementById("file").click();
    return false;
  },

  showCSVSubmit: function() {
    var file = document.getElementById("file").files[0];
    if (file) {
        alert("Name: " + file.name + "\n" + "Last Modified Date :" + file.lastModifiedDate);
    } else {
      return;
    }

    $('#file-submit').css("display", "inline-block");
  },

  submitCSV: function(e) {
    alert("send file to backend, and return a user response ('csv successful csv failed')");
    var file = document.getElementById("file").files[0];

    e.stopPropagation();
    e.preventDefault();
    debugger
    $('#file-submit').css("display", "none");
  },

  addImage: function(e) {
    e.preventDefault();

    alert("need to add image storage (cloudinary or aws?");

    //cloudinary widget
    debugger
  },

  handleCheckbox: function() {
    if ($( "input:checked" ).length > 0) {
      this.setState({ auction: true });
    } else {
      this.setState({ auction: false });
    }
  },

  submitProduct: function(e) {
    e.preventDefault();

    var productProperties = this.state;
    delete productProperties.productionCreationStatus;

    AddProductActions.createProduct(productProperties);
  },

  render: function() {
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
      alert("The File APIs are not fully supported in this browser.");
    }

    return (
      <div className="admin-add-product">
        <div className="row">
          <div className="col-xs-3 admin-underline"></div>
        </div>

        <div className="admin-csv">
          <h1>IMPORT CSV</h1>
          <div id="div-file-submit" onClick={this.chooseCSV}>Choose File</div>
          <input type="file" id="file" onChange={this.showCSVSubmit}/>
          <div id="file-submit" onClick={this.submitCSV}>Submit File</div>
          <br/>
          <br/>
          <p>Note: Format must be a CSV file, and match the column formatting of the database.</p>
        </div>

        <div className="admin-divider"></div>

        <div className="admin-add-item">
          <h1>ADD PRODUCT</h1>
          <div className = "admin-add-product">
            <form onSubmit={this.submitProduct}>
              <div className="form-group">
                <div className="row">
                  <div className="col-xs-4">
                    <button id="image-button"
                    onClick={this.addImage}
                    className="btn btn-default">
                    ADD PRODUCT IMAGE
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

                            <div className="col-xs-4">
                              <label htmlFor="form-auction">ADD TO AUCTION</label>
                              <input className="form-control"
                                     type="checkbox"
                                     id="form-auction"
                                     onChange={this.handleCheckbox}/>
                            </div>
                          </div>

                          <button type="submit" id="product-submit" className="btn btn-primary form-button btn-lg btn-block">Create Product</button>
                        </div>
                      </form>

                      <div className="product-creation-status">
                        {this.state.productionCreationStatus}
                      </div>
                  </div>
                </div>
      </div>
    );
  }

});

module.exports = AddProduct;
