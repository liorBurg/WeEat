
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
  case 'max_delivery_time':
    return rests.filter(function (rest) {
      return rest.max_delivery_time <= value;
    });
  case 'rating':
    return rests.filter(function (rest) {
      return rest.rating >= value;
    });
  default:
    return rests;
  }
}

export { filterRests };
