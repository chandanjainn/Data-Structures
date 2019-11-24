function areThereDuplicates(arguments) {
	// let result =
	// 	new Set(arguments).size !== arguments.length
	// 		? 'Contains Duplicates'
	// 		: 'Does not Contain Duplicates';
	// console.log(result);
	// return result;

	let collection = {};
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
		console.log(collection);
	}
	for (let key in collection) {
		if (collection[key] > 1) return true;
	}
	return false;
}

function areThereDuplicates2(...args) {
	// Two pointers

	args.sort();
	console.log(args);
	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

areThereDuplicates(['a', 'b', 'c', 'a']);
