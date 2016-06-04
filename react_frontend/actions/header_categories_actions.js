var AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

var HeaderCategoriesActions = {
  addCategory: function(category) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.ADD_CATEGORY_FILTER,
      category: category
    });
  }
};

module.exports = HeaderCategoriesActions;
