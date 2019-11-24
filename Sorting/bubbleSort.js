function bubbleSort(arr) {
	let noSwaps = false;
	for (let i = 0; i < arr.length; i++) {
		noSwaps = true;
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}

	console.log(arr);
}

bubbleSort([3, 2, 6, 4, 82, 9]);
