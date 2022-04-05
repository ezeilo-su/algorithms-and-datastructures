function mergeSort(arr) {
  if(arr.length <= 1)return arr;
  
  // A function that merges two sorted arrays
  const mergeArrays = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]) {
        result.push(arr1[i++]);
      } else {
        result.push(arr2[j++]);
      }
    }
    return(
      [...result, ...arr1.slice(i), ...arr2.slice(j)]
    );
  }

  const mid =  Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeArrays(left, right);
}


console.log(mergeSort([100, 56, 20, 26, 0, 7, 3, 4, 2]));
