function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, i, j) => {
    if (arr?.length > 1){
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  if (!arr) return null;

  let currPivot = arr[start];
  let currPivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (currPivot > arr[i]) {
      currPivotIdx++;
      swap(arr, i, currPivotIdx);
    }
  }
  swap(arr, start, currPivotIdx);

  return currPivotIdx;
}

const arr = [5, 2, 1, 8, 7, 6, 3];

console.log(`${pivot(arr)} => [${arr}]`);