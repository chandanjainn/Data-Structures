function substrings(str) {
	var i,
		j,
		result = [];
	for (i = 0; i < str.length; i++) {
		for (j = i + 1; j < str.length + 1; j++) {
			result.push(str.slice(i, j));
		}
	}
	console.log(result);
}

substrings('abcd');
