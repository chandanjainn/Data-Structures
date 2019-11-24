function insertionSort(array) {
	let length = array.length;
	for (i = 1; i < length; i++) {
		let temp = array[i];
		console.log('Pass ' + i + ': ' + array + ' || ' + 'i=' + i + ' j=' + j);
		for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = temp;
	}
	console.log('Sorted Array =>  ' + array);
}

insertionSort([5, 9, 13, 4, 1, 6]);
