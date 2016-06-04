var React = require('react'),
    LoginDropdown = require('./login_dropdown'),
    HeaderCategoriesActions = require('../../../actions/header_categories_actions');

var HeaderCategories = React.createClass({
  handleClick: function(event) {
    //go to history with filter
    HeaderCategoriesActions.addTitleFilter(event.target.innerHTML);
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
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseOne" aria-controls="collapseOne">
                  Category 1
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseTwo" aria-controls="collapseTwo">
                  Category 2
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseThree" aria-controls="collapseThree">
                  Category 3
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseFour" aria-controls="collapseFour">
                  Category 4
                </a>
              </h4>
              <h4 className="panel-title col-xs-2">
                <a data-toggle="collapse" data-parent="#header-categories-accordion" aria-expanded="false" href="#collapseFive" aria-controls="collapseFive">
                  Category 5
                </a>
              </h4>
              <LoginDropdown/>
            </div>
          </div>
          <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            <div className="category-filter" onClick={this.handleClick}>I am a link with this filter.</div>
          </div>
          <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 2 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 3 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 4 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
          <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading">
            I am the category 5 content. slkfsdlk;fj s;fkjs df;lkjds;lfk jsfl ;sldkfj ds;lfj sd;lfj sdl;kfj sa;ldfkj sdl;fk salfjs a;lkf sdl;kfj ;lsdfj ;slkfj sdl;kfj sl;kfjsl; fkfjkls;kfjs ;lafjls;k fkkds
          </div>
        </div>
      </div>
    </div>



    );
  }

});

module.exports = HeaderCategories;
