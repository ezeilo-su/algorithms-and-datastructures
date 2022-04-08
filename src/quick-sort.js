function pivot(arr, start, end) {
  if (!arr) return;
  if (!start) start = 0;
  if (!end) end = arr.length - 1;

  let currPivot = arr[start];
  let currPivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (currPivot > arr[i]) {
      currPivotIdx++;
      [arr[i], arr[currPivotIdx]] = [arr[currPivotIdx], arr[i]];
    }
  }
  [arr[start], arr[currPivotIdx]] = [arr[currPivotIdx], arr[start]];
  return currPivotIdx;
}

const arr = [5, 2, 1, 8, 7, 6, 3];

console.log(`${pivot(arr)} => [${arr}]`);