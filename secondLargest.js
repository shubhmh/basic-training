function secondLargest(array) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of array) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? null : secondMax;
}
