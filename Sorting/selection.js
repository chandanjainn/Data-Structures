let selectionSort = function(array) {
	for (let i = 0; i < array.length; i++) {
		//set min to the current iteration of i
		let min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
				[array[i], array[min]] = [array[min], array[i]];
			}
		}
	}
	console.log(array);
};

selectionSort([3, 2, 6, 4, -82, 9]);
