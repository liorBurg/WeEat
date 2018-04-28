
function filterRests(rests, filterType, value) {
  switch (filterType) {
  case 'search':
    return rests.filter(function (rest) {
      return rest.name.toLowerCase().search(value.toLowerCase()) !== -1;
    });
  case 'cuisine':
    return value === 'All' ? rests
      : rests.filter(function (rest) {
        return rest.cuisine.toLowerCase() === value.toLowerCase();
      });
  default:
    return rests;
  }
}

export { filterRests };
