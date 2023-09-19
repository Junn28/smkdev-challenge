function seriesUpTerms(n) {
  let total = 0;
  let arr = [];

  for (let i = 0; i < n; i++) {
    total += 10 ** i * 2;
    arr.push(total);
  }
  const result = arr.reduce((a, b) => a + b);
  console.log(result);
}
seriesUpTerms(5);
