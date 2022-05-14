// A function that merges two sorted arrays

function mergeArrays(arr1, arr2) {
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
  )
}

console.log(mergeArrays([0, 4, 21],  [0, 3, 4, 4, 7]));

// [1, 4, 21],  [0, 3, 4, 4, 7]