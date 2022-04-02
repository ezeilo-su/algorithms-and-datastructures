function bubbleSort(arr) {
	let noSwaps = true;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true
		for (let j = 0; j < i - 1; j++) {
			if(arr[j] > arr[j + 1]){
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				console.log('swapped');
				noSwaps = false;
			}         
		}      
		if(noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort([1, 3, 2, 4, 7, 9, 10]));