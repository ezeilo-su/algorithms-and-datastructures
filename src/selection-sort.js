function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min])min = j;
    }
    if(arr[i] !== arr[min]) [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr;
}

console.log(selectionSort([1, 3, 2, 4, 7, 9, 10, 8]));