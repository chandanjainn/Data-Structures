function pivot(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start],
		swapIdx = start;
	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			if (swapIdx < i) [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
		}
	}
	[arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
	return swapIdx;
}

quickSort([3, 2, 1, 6, 33, 21, 4, 82, 9]);

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right); //3
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	console.log(arr);
	return arr;
}
