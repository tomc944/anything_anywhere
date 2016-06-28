var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/item_constants');
    FilterStore = new Store(Dispatcher);

var _filterParams = { category: "COLLECTIBLE BAZAAR" };

FilterStore.getAllFilters = function() {
  return Object.assign({}, _filterParams);
};

FilterStore.getCategory = function() {
  return _filterParams.category;
}

FilterStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FilterConstants.ADD_CATEGORY_FILTER:
      addCategoryFilter(payload.category);
      break;
  }
};

function addCategoryFilter (category) {
  _filterParams.category = category;

  FilterStore.__emitChange();
};

module.exports = FilterStore;
