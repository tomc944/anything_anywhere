var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var AddProduct = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    productName: "",

  },

  getInitialState: function() {
    return this.blankAttrs;
  },

  chooseFile: function() {
    document.getElementById("file").click();
    return false;
  },

  showSubmit: function() {
    var file = document.getElementById("file").files[0];
    if (file) {
        alert("Name: " + file.name + "\n" + "Last Modified Date :" + file.lastModifiedDate);
    } else {
      return;
    }

    $('#file-submit').css("display", "inline-block");
  },

  startRead: function(e) {
    var file = document.getElementById("file").files[0];

    e.stopPropagation();
    e.preventDefault();
    debugger
  },

  handleSubmit: function() {
    //AddProductActions.createProduct(this.state)
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
          <div id="div-file-submit" onClick={this.chooseFile}>Choose File</div>
          <input type="file" id="file" onChange={this.showSubmit}/>
          <div id="file-submit" onClick={this.startRead}>Submit File</div>
        </div>

        <div className="admin-divider"></div>

        <div className="admin-add-item">
          <h1>ADD PRODUCT</h1>
          <div className="row">
            <div className = "admin-add-product">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">

                  <div className="row">
                    <div className="col-xs-4">
                      <label htmlFor="form-weight">WEIGHT</label>
                      <input className="form-control"
                             type="text"
                             id="form-weight"
                             valueLink={this.linkState('WEIGHT')}
                             placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                       <label htmlFor="form-list">LIST</label>
                       <input className="form-control"
                              type="text"
                              id="form-list"
                              valueLink={this.linkState('LIST')}
                              placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                        <label htmlFor="form-number">NUMBER</label>
                        <input className="form-control"
                         type="text"
                         id="form-number"
                         valueLink={this.linkState('NUMBER')}
                         placeholder=""/>
                     </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-4">
                       <label htmlFor="form-country">COUNTRY</label>
                       <input className="form-control"
                        type="text"
                        id="form-country"
                        valueLink={this.linkState('COUNTRY')}
                        placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                      <label htmlFor="form-region">REGION</label>
                      <input className="form-control"
                         type="text"
                         id="form-region"
                         valueLink={this.linkState('REGION')}
                         placeholder=""/>
                     </div>

                     <div className="col-xs-4">
                       <label htmlFor="form-dynasty">DYNASTY</label>
                       <input className="form-control"
                        type="text"
                        id="form-dynasty"
                        valueLink={this.linkState('DYNASTY')}
                        placeholder=""/>
                    </div>
                  </div>

                  <div className="row">
                  <div className="col-xs-4">
                    <label htmlFor="form-denomination">DENOMINATION</label>
                <input className="form-control"
                       type="text"
                       id="form-denomination"
                       valueLink={this.linkState('DENOMINATION')}
                       placeholder=""/>
                   </div>

                   <div className="col-xs-4">
                     <label htmlFor="form-date">DATE</label>
                 <input className="form-control"
                        type="text"
                        id="form-date"
                        valueLink={this.linkState('DATE')}
                        placeholder=""/>
                    </div>

                    <div className="col-xs-4">
                      <label htmlFor="form-mintmark">MINTMARK</label>
                    <input className="form-control"
                           type="text"
                           id="form-mintmark"
                           valueLink={this.linkState('MINTMARK')}
                           placeholder=""/>
                       </div>
                     </div>


                     <div className="row">
                      <div className="col-xs-4">
                         <label htmlFor="form-mint">MINT</label>
                         <input className="form-control"
                            type="text"
                            id="form-mint"
                            valueLink={this.linkState('MINT')}
                            placeholder=""/>
                        </div>

                          <div className="col-xs-4">
                          <label htmlFor="form-obverse">OBVERSE</label>
                          <input className="form-control"
                             type="text"
                             id="form-obverse"
                             valueLink={this.linkState('OBVERSE')}
                             placeholder=""/>
                         </div>

                         <div className="col-xs-4">
                           <label htmlFor="form-reverse">REVERSE</label>
                           <input className="form-control"
                              type="text"
                              id="form-reverse"
                              valueLink={this.linkState('REVERSE')}
                              placeholder=""/>
                          </div>
                        </div>

                      <div className="row">
                        <div className="col-xs-4">
                            <label htmlFor="form-edge">EDGE</label>
                            <input className="form-control"
                           type="text"
                           id="form-edge"
                           valueLink={this.linkState('EDGE')}
                           placeholder=""/>
                       </div>

                       <div className="col-xs-4">
                         <label htmlFor="form-material">MATERIAL</label>
                         <input className="form-control"
                          type="text"
                          id="form-material"
                          valueLink={this.linkState('MATERIAL')}
                          placeholder=""/>
                      </div>

                      <div className="col-xs-4">
                        <label htmlFor="form-diameter">DIAMETER</label>
                        <input className="form-control"
                         type="text"
                         id="form-diameter"
                         valueLink={this.linkState('DIAMETER')}
                         placeholder=""/>
                     </div>
                   </div>

                   <div className="row">
                       <div className="col-xs-4">
                         <label htmlFor="form-actual-metal-weight">ACTUAL_METAL_WEIGHT</label>
                 <input className="form-control"
                        type="text"
                        id="form-actual-metal-weight"
                        valueLink={this.linkState('ACTUAL_METAL_WEIGHT')}
                        placeholder=""/>
                    </div>

                      <div className="col-xs-4">
                        <label htmlFor="form-comment1">COMMENT_1</label>
                <input className="form-control"
                       type="text"
                       id="form-comment1"
                       valueLink={this.linkState('COMMENT_1')}
                       placeholder=""/>
                   </div>

                     <div className="col-xs-4">
                       <label htmlFor="form-catalog">CATALOG</label>
               <input className="form-control"
                      type="text"
                      id="form-catalog"
                      valueLink={this.linkState('CATALOG')}
                      placeholder=""/>
                  </div>
                </div>

                <div className="row">
                    <div className="col-xs-4">
                      <label htmlFor="form-comment2">COMMENT_2</label>
              <input className="form-control"
                     type="text"
                     id="form-comment2"
                     valueLink={this.linkState('COMMENT_2')}
                     placeholder=""/>
                 </div>

                   <div className="col-xs-4">
                     <label htmlFor="form-grade">GRADE</label>
             <input className="form-control"
                    type="text"
                    id="form-grade"
                    valueLink={this.linkState('GRADE')}
                    placeholder=""/>
                </div>

                  <div className="col-xs-4">
                    <label htmlFor="form-wholesale">WHOLESALE</label>
            <input className="form-control"
                   type="text"
                   id="form-wholesale"
                   valueLink={this.linkState('WHOLESALE')}
                   placeholder=""/>
               </div>
             </div>

             <div className="row">
                 <div className="col-xs-4">
                   <label htmlFor="form-price">PRICE</label>
           <input className="form-control"
                  type="text"
                  id="form-price"
                  valueLink={this.linkState('PRICE')}
                  placeholder=""/>
              </div>

                <div className="col-xs-4">
                  <label htmlFor="form-quantity">QUANTITY</label>
          <input className="form-control"
                 type="text"
                 id="form-quantity"
                 valueLink={this.linkState('QUANTITY')}
                 placeholder=""/>
             </div>

               <div className="col-xs-4">
                 <label htmlFor="form-unit-cost">UNIT_COST</label>
             <input className="form-control"
                    type="text"
                    id="form-unit-cost"
                    valueLink={this.linkState('UNIT_COST')}
                    placeholder=""/>
                </div>
              </div>


              <div className="row">
                  <div className="col-xs-4">
                    <label htmlFor="form-total-cost">TOTAL_COST</label>
                <input className="form-control"
                       type="text"
                       id="form-total-cost"
                       valueLink={this.linkState('TOTAL_COST')}
                       placeholder=""/></div>


                     <div className="col-xs-4">
                       <label htmlFor="form-quantity-sold">QUANTITY_SOLD</label>
                   <input className="form-control"
                          type="text"
                          id="form-quantity-sold"
                          valueLink={this.linkState('QUANTITY_SOLD')}
                          placeholder=""/></div>


                        <div className="col-xs-4">
                          <label htmlFor="form-hold1">HOLD_1</label>
                  <input className="form-control"
                         type="text"
                         id="form-hold1"
                         valueLink={this.linkState('HOLD_1')}
                         placeholder=""/></div>
                     </div>



                    <div className="row">
                       <div className="col-xs-4">
                         <label htmlFor="form-hold2">HOLD_2</label>
                 <input className="form-control"
                        type="text"
                        id="form-hold2"
                        valueLink={this.linkState('HOLD_2')}
                        placeholder=""/></div>


                      <div className="col-xs-4">
                        <label htmlFor="form-source">SOURCE</label>
                    <input className="form-control"
                           type="text"
                           id="form-source"
                           valueLink={this.linkState('SOURCE')}
                           placeholder=""/></div>


                         <div className="col-xs-4">
                           <label htmlFor="form-date-purchased">DATE_PURCHASED</label>
                   <input className="form-control"
                          type="text"
                          id="form-date-purchased"
                          valueLink={this.linkState('DATE_PURCHASED')}
                          placeholder=""/></div>
                      </div>


                        <div className="row">
                          <div className="col-xs-4">
                          <label htmlFor="form-picture">PICTURE</label>
                      <input className="form-control"
                             type="text"
                             id="form-picture"
                             valueLink={this.linkState('PICTURE')}
                             placeholder=""/></div>


                           <div className="col-xs-4">
                             <label htmlFor="form-sold">DATE_SOLD</label>
                     <input className="form-control"
                            type="text"
                            id="form-sold"
                            valueLink={this.linkState('DATE_SOLD')}
                            placeholder=""/></div>


                          <div className="col-xs-4">
                            <label htmlFor="form-comment3">COMMENT_3</label>
                    <input className="form-control"
                           type="text"
                           id="form-comment3"
                           valueLink={this.linkState('COMMENT_3')}
                           placeholder=""/></div>
                       </div>


                         <div className="row">
                           <div className="col-xs-4">
                           <label htmlFor="form-comment4">COMMENT_4</label>
                   <input className="form-control"
                          type="text"
                          id="form-comment4"
                          valueLink={this.linkState('COMMENT_4')}
                          placeholder=""/></div>


                        <div className="col-xs-4">
                          <label htmlFor="form-category">CATEGORY</label>
                  <input className="form-control"
                         type="text"
                         id="form-category"
                         valueLink={this.linkState('CATEGORY')}
                         placeholder=""/></div>


                       <div className="col-xs-4">
                         <label htmlFor="form-subcategory">SUBCATEGORY</label>
                 <input className="form-control"
                        type="text"
                        id="form-subcategory"
                        valueLink={this.linkState('SUBCATEGORY')}
                        placeholder=""/></div>
                    </div>


                      <div className="row">
                        <div className="col-xs-4">
                        <label htmlFor="form-comment5">COMMENT_5</label>
                <input className="form-control"
                       type="text"
                       id="form-comment5"
                       valueLink={this.linkState('COMMENT_5')}
                       placeholder=""/></div>


                      <div className="col-xs-4">
                       <label htmlFor="form-consignment">CONSIGNMENT</label>
                       <input className="form-control"
                         type="text"
                        id="form-consignment"
                        valueLink={this.linkState('CONSIGNMENT')}
                        placeholder=""/></div>
                      </div>

                      <button type="submit" id="product-submit" className="btn btn-primary form-button btn-lg btn-block">Create Product</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>

      </div>
    );
  }

});

module.exports = AddProduct;