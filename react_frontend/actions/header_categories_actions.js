var AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

var HeaderCategoriesActions = {
  addTitleFilter: function(titleFilter) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.ADD_TITLE_FILTER,
      titleFilter: titleFilter
    });
  }
};

module.exports = HeaderCategoriesActions;
