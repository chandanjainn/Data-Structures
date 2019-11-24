// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(num) {
	if (num.length == 0) return null;
	if (num.length == 1) return num[0];
	return num[0] * productOfArray(num.splice(1));
}
productOfArray([1, 2, 3, 10, 100]);
