var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/item_constants');
    FilterStore = new Store(Dispatcher);

var _filterParams = { titleFilter: "Anything Anywhere"};

FilterStore.getAllFilters = function() {
  return Object.assign({}, _filterParams);
};

FilterStore.getTitle = function() {
  return _filterParams.titleFilter;
}

FilterStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FilterConstants.ADD_TITLE_FILTER:
      addTitleFilter(payload.titleFilter);
      break;
  }
};

function addTitleFilter (filter) {
  _filterParams.titleFilter = filter;

  FilterStore.__emitChange();
};

module.exports = FilterStore;
