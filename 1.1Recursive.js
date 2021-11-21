function count(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
count(5);

function countdown(num, target) {
  if (num <= target) {
    console.log(target);
    countdown(num, target - 1);
  }
}
countdown(1, 5);

function MultiplesOf(num, target) {
  for (let i = 1, n = num; num < target; i++) {
    if (num < target) {
      num = n * i;
    }
    if (num == target) {
      console.log(i);
    } else if (num > target) {
      console.log(`The Requested Number is not a multiple of ${num}`);
    }
  }
}

MultiplesOf(6, 24);
