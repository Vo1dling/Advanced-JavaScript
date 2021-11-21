s = ["h", "e", "l", "l", "o"];
function revString(arr) {
  return arr.reverse();
}
revString(s);
console.log(s);

st = ["H", "a", "n", "n", "a", "h"];
function forRev(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}
console.log(forRev(st));

str = ["W", "o", "w"];
function recursiveRev(s) {
  if (s.length === 0) {
    return [];
  }

  let v = s.shift();
  recursiveRev(s);
  s.push(v);
  return s;
}

console.log(recursiveRev(str, 3));
