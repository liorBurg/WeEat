
function filterRests(rests, filters) {
  let updatedRests = rests;
  Object.keys(filters).map((filterType) => {
    const value = filters[filterType];
    switch (filterType) {
    case 'search':
      updatedRests = updatedRests.filter(function (rest) {
        return rest.name.toLowerCase().search(value.toLowerCase()) !== -1;
      });
      return;
    case 'cuisine':
      updatedRests = value === 'All' ? rests
        : updatedRests.filter(function (rest) {
          return rest.cuisine.toLowerCase() === value.toLowerCase();
        });
      return;
    case 'max_delivery_time':
      updatedRests = updatedRests.filter(function (rest) {
        return rest.max_delivery_time <= value;
      });
      return;
    case 'rating':
      updatedRests = updatedRests.filter(function (rest) {
        return rest.rating >= value;
      });
      return;
    default:
      updatedRests = rests;
      return;
    }
  });
  return updatedRests;
}

export { filterRests };
