var React = require('react'),
    HeaderCategoriesActions = require('../../../actions/header_categories_actions');

var HeaderCategories = React.createClass({
  buildCategoryDivs: function(subcategory) {
    // categories that neeed to be built out still
      // paper money
      // tokens and medals
      // other fiscalia
      // military civic
      // relics and antiquities
      // documents
      // natural objects
      // Miscellaneous
      // what is this? individual picture entries
      // link to other react component
      // archive: render json with jbuilder for sold items

    SUBCATEGORIES = {
      "coins":              [ "Ancient Coins", "Islamic & Old Indian Coins",
                              "Oriental Cast Coins & Related",
                              "Modern World Coins (A-B)",
                              "Modern World Coins (C-D)",
                              "Modern World Coins (E-F)",
                              "Modern World Coins (G)",
                              "Modern World Coins (H-I)",
                              "Modern World Coins (J-L)",
                              "Modern World Coins (M-N)",
                              "Modern World Coins (O-Q)",
                              "Modern World Coins (R)",
                              "Modern World Coins (S)",
                              "Modern World Coins (T)",
                              "Modern World Coins (U-Z)" ],
      "paper money":        [ "BankNotes A-F",
                              "BankNotes G-N",
                              "BankNotes O-R",
                              "BankNotes S-Z" ],
      "tokens and medals":  [ "Token & medal inventory" ],
      "other fiscal":       [ "Introduction to fiscalia collecting",
                              "Introduction to bonds and shares",
                              "Personal opinions regarding the collection of phonecards, etc",
                              "Fiscalia inventory" ],
      "military civic":     [ "Abbreviations found on British military medals, by R.A. Fikentscher",
                              "My important personal opinion of militaria collecting",
                              "Introduction to faleristics (badges)",
                              "Inventory of couple of hundred badges, medals, etc., unillustrated moment, but better than nothing, eh?"],
      "documents":          [ "Privacy Policy",
                              "Document inventory" ],
      "relics antiquities": [ "Relics inventory" ],
      "advertising prop":   [ "Political imitation banknotes of the world",
                              "GERMANY, Nazi propoganda books & magazines",
                              "FRANCE, early 20th century adversiting material",
                              "USA, 19th century adversiting material",
                              "USA, 20th century adversiting material" ],
      "wholesale":          [ 'placeholder' ],
      "natural objects":    [ "natural objects inventory"],
      "jewelry":            [ "French postwar souvenir bracelet",
                              "Roman glass in sterling silver settings",
                              "Thailand hill tribes silver",
                              "USA, antique gold stickpins" ],
      "misellaneous":       [ "Miscellaneous Inventory" ],
      "books":              [ "Placeholder" ],
      "what\'s this":       [ "Placeholder" ],
      "buying":             [ "Placeholder" ],
      "archive":            [ "Placeholder" ]
    }

    var divs = SUBCATEGORIES[subcategory].map(function(category) {
      return (
        <div class='category-filter' onClick={this.handleClick}>
          {category}
        </div>
      )
    }.bind(this))

    return divs;
  },

  handleClick: function(event) {
    //go to history with filter
    HeaderCategoriesActions.addCategory(event.target.innerHTML);
    debugger
    this.props.history.pushState(null, "/products");
  },

  render: function() {
    return (
      <div>

      <div id="header-categories-accordion" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="heading">

            <div className="row">
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseCoins" aria-controls="collapseCoins">
                  COINS
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapsePaperMoney" aria-controls="collapsePaperMoney">
                  PAPER MONEY
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseOtherFiscal" aria-controls="collapseOtherFiscal">
                  OTHER FISCAL
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseTokensMedals" aria-controls="collapseTokensMedals">
                  TOKENS & MEDALS
                </a>
              </p>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <br/>
              </div>
            </div>

            <div className="row">
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseMilitaryCivic" aria-controls="collapseMilitaryCivic">
                  MILITARY & CIVIC
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseDocuments" aria-controls="collapseDocuments">
                  DOCUMENTS
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseAdvertisingPropaganda" aria-controls="collapseAdvertisingPropaganda">
                  ADS & PROPAGANDA
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseWholesale" aria-controls="collapseWholesale">
                  WHOLESALE
                </a>
              </p>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <br/>
              </div>
            </div>

            <div className="row">
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseJewelry" aria-controls="collapseJewelry">
                  JEWELRY
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseBooks" aria-controls="collapseBooks">
                  BOOKS
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseNaturalObjects" aria-controls="collapseNaturalObjects">
                  NATURAL OBJECTS
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseRelics" aria-controls="collapseRelics">
                  RELICS & ANTIQUITIES
                </a>
              </p>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <br/>
              </div>
            </div>

            <div className="row">
              <p className="panel-title col-xs-offset-3 col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseMiscellaneous" aria-controls="collapseMiscellaneous">
                  MISCELLANEOUS
                </a>
              </p>
              <p className="panel-title col-xs-3">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseWhatAreThese" aria-controls="collapseWhatAreThese">
                  WHAT ARE THESE?
                </a>
              </p>
            </div>

          </div>

          <div id="collapseCoins" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('coins')}
          </div>
          <div id="collapsePaperMoney" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('paper money')}
          </div>
          <div id="collapseOtherFiscal" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('other fiscal')}
          </div>
          <div id="collapseTokensMedals" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('tokens and medals')}
          </div>


          <div id="collapseMilitaryCivic" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('military civic')}
          </div>
          <div id="collapseDocuments" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('documents')}
          </div>
          <div id="collapseAdvertisingPropaganda" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('advertising prop')}
          </div>
          <div id="collapseWholesale" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('wholesale')}
          </div>


          <div id="collapseJewelry" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('jewelry')}
          </div>
          <div id="collapseBooks" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('books')}
          </div>
          <div id="collapseNaturalObjects" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('natural objects')}
          </div>
          <div id="collapseRelics" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('relics antiquities')}
          </div>

          <div id="collapseMiscellaneous" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('misellaneous')}
          </div>
          <div id="collapseWhatAreThese" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            {this.buildCategoryDivs('what\'s this')}
          </div>
        </div>
      </div>
    </div>

    );
  }

});

module.exports = HeaderCategories;
