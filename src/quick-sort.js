function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, i, j) => {
    if (arr?.length > 1){
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  if (!arr) return null;

  let currPivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (currPivot > arr[i]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);

  return swapIndex;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  
  return arr;
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];

console.log(`\n[${quickSort(arr)}]`);
console.log(arr)
