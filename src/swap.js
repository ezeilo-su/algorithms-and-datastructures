const swap = (arr, i, j) => {
  if (arr?.length > 1){
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}