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
            (introductory offer: 100 different coins including one ancient, $25.00 postpaid in USA) <div className="category-filter" onClick={this.handleClick}>I am a link with this filter.</div>
          </div>
          <div id="collapsePaperMoney" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            (introductory offer: 25 different banknotes, $10.00 postpaid in USA)
          </div>
          <div id="collapseOtherFiscal" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 4 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseTokensMedals" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 3 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>


          <div id="collapseMilitaryCivic" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 5 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseDocuments" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            (introductory offer: 100 different coins including one ancient, $25.00 postpaid in USA) <div className="category-filter" onClick={this.handleClick}>I am a link with this filter.</div>
          </div>
          <div id="collapseAdvertisingPropaganda" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            (introductory offer: 25 different banknotes, $10.00 postpaid in USA)
          </div>
          <div id="collapseWholesale" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 6 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>


          <div id="collapseJewelry" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 4 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseBooks" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 6 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseNaturalObjects" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 3 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseRelics" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 5 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>

          <div id="collapseMiscellaneous" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 3 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseWhatAreThese" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 5 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>


        </div>
      </div>
    </div>

    );
  }

});

module.exports = HeaderCategories;
