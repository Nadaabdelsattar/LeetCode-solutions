Array.prototype.groupBy = function (fn) {
  const result = {};

  for (const item of this) {
    const key = fn(item); // apply the callback to get the group key
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
};
