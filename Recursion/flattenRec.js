function flatten(arr) {
	let res = [];

	function helper(array) {
		if (array.length == 1) {
			if (Array.isArray(array[0])) {
				let newArr;
				return helper([...array[0]]);
			} else return array;
		}
		return res.concat(array[0]).concat(...helper(array.slice(1)));
	}
	return helper(arr);
}

//flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten2([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
//flatten([[1],[2],[3]]) // [1,2,3]
flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]

function flatten2(oldArr) {
	var newArr = [];
	for (var i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}

function flattenArray(arr) {
  const flattened = [].concat(...arr);
  return flattened.some(item => Array.isArray(item))
    ? flattenArray(flattened)
    : flattened;
}
