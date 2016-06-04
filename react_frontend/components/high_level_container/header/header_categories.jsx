var React = require('react'),
    HeaderCategoriesActions = require('../../../actions/header_categories_actions');

var HeaderCategories = React.createClass({
  handleClick: function(event) {
    //go to history with filter
    HeaderCategoriesActions.addCategory(event.target.innerHTML);
    debugger
    this.props.history.pushState(null, "/products");
  },

  render: function() {
    return (
      <div>
TOKENS & MEDALS
OTHER FISCAL
MILITARY & CIVIC
RELICS & ANTIQUITIES (including "primitive money")
DOCUMENTS
ADVERTISING & PROPAGANDA
NATURAL OBJECTS (fossils, minerals, etc.)
JEWELRY
MISCELLANEOUS: objets d'art, collectibles, "stuff"
BOOKS
WHOLESALE
WHAT'S THIS?
BUYING
Archive of sold items


      <div id="header-categories-accordion" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="heading">

            <div className="row">
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseCoins" aria-controls="collapseCoins">
                  COINS
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapsePaperMoney" aria-controls="collapsePaperMoney">
                  PAPER MONEY
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseTokensMedals" aria-controls="collapseTokensMedals">
                  TOKENS & MEDALS
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseOtherFiscal" aria-controls="collapseOtherFiscal">
                  OTHER FISCAL
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseMilitaryCivic" aria-controls="collapseMilitaryCivic">
                  MILITARY & CIVIC
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseRelicAntiquities" aria-controls="collapseRelicAntiquities">
                  RELICS & ANTIQUITIES (including "primitive" money)
                </a>
              </h4>
            </div>

            <div className="row">
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseDocuments" aria-controls="collapseDocuments">
                  DOCUMENTS
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseAdvertisingPropaganda" aria-controls="collapseAdvertisingPropaganda">
                  ADVERTISING & PROPAGANDA
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseNaturalObjects" aria-controls="collapseNaturalObjects">
                  NATURAL OBJECTS (FOSSILS, MINERALS, ETC.)
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseJewelry" aria-controls="collapseJewelry">
                  JEWELRY
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseMiscellaneous" aria-controls="collapseMiscellaneous">
                  MISCELLANEOUS
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseBooks" aria-controls="collapseBooks">
                  BOOKS
                </a>
              </h4>
            </div>

          </div>

          <div id="collapseCoins" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            (introductory offer: 100 different coins including one ancient, $25.00 postpaid in USA) <div className="category-filter" onClick={this.handleClick}>I am a link with this filter.</div>
          </div>
          <div id="collapsePaperMoney" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            (introductory offer: 25 different banknotes, $10.00 postpaid in USA)
          </div>
          <div id="collapseTokensMedals" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 3 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseOtherFiscal" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 4 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseMilitaryCivic" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 5 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseRelicAntiquities" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 6 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>

          <div id="collapseDocuments" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            (introductory offer: 100 different coins including one ancient, $25.00 postpaid in USA) <div className="category-filter" onClick={this.handleClick}>I am a link with this filter.</div>
          </div>
          <div id="collapseAdvertisingPropaganda" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            (introductory offer: 25 different banknotes, $10.00 postpaid in USA)
          </div>
          <div id="collapseNaturalObjects" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 3 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseJewelry" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 4 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseMiscellaneous" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 5 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseBooks" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 6 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>

        </div>
      </div>
    </div>



    );
  }

});

module.exports = HeaderCategories;
