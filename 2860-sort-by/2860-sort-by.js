/**
 * @param {any[]} arr
 * @param {(x: any) => number} fn
 * @return {any[]}
 */
function sortBy(arr, fn) {
  // 1. Decorate: build array of [key, value]
  const decorated = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    decorated[i] = [fn(arr[i]), arr[i]];
  }

  // 2. Sort by key (numeric comparator)
  decorated.sort((a, b) => a[0] - b[0]);

  // 3. Undecorate: extract sorted values
  const result = new Array(arr.length);
  for (let i = 0; i < decorated.length; i++) {
    result[i] = decorated[i][1];
  }

  return result;
}
