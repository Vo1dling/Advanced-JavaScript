s = ["h", "e", "l", "l", "o"];
function revString(arr) {
  return arr.reverse();
}
console.log(revString(s));

st = ["H", "a", "n", "n", "a", "h"];
function forRev(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}
console.log(forRev(st));

str = ["W", "o", "w"];
let recursiveRev = (arr, n) => {
  if (n == 0) {
    return [];
  }

  return [arr[n - 1]].concat(recursiveRev(arr, --n));
};
console.log(recursiveRev(str, 3));
