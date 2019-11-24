var array = [2];
for (var i = 3; i <= 100; i += 2) {
	if (array.every(p => i % p)) {
		array.push(i);
	}
}
console.log(array);
