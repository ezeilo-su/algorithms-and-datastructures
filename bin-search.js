function binSearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left)/2);
        if(arr[mid] < n) {
            left = mid + 1;
        }else if (arr[mid] > n){
            right = mid - 1;
        }else { return mid; }
    }
    return -1;
}

console.log(binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20], 20));