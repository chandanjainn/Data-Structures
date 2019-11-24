charCount('Go to Hell,bitch ABRA CADABRA223!');

function charCount(str) {
	var result = {};
	for (var char of str) {
		var char = char.toLowerCase();
		if (/[a-z0-9]$/i.test(char)) {
			result[char] = ++result[char] || 1;
		}
	}
	return result;
}
