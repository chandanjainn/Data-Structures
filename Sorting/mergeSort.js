function merge(arr1, arr2) {
	let i = 0,
		j = 0,
		result = [],
		l1 = arr1.length,
		l2 = arr2.length;

	while (i < l1 && j < l2) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	while (i < l1) {
		result.push(arr1[i]);
		i++;
	}
	while (j < l2) {
		result.push(arr2[j]);
		j++;
	}
	console.log('Sorted array => ' + result);
	return result;
}

function mergeSort(array) {
	if (array.length <= 1) return array;
	let mid = Math.floor(array.length / 2),
		left = mergeSort(array.slice(0, mid)),
		right = mergeSort(array.slice(mid));
	return merge(left, right);
}

mergeSort([5, 9, 13, 40, 111, 1, 10, 50]);
