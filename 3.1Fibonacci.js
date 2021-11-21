function fibonnaci(startSeq0, N) {
  let fibSeq = [0, 1];
  fibSeq[0] = startSeq0 === true ? (fibSeq[0] = 0) : (fibSeq[0] = 1);
  fibSeq[1] = 1;
  for (let i = 0; i < N - 1; i++) {
    fibSeq[i + 2] = fibSeq[i] + fibSeq[i + 1];
  }
  return fibSeq[N];
}
console.log(fibonnaci(true, 3));
