function getDigit(num, place) {
	// let temp = Math.abs(num);
	// for (i = 0; i < place; i++) {
	// 	temp = Math.floor(temp / 10);
	// }
	// console.log(temp % 10);
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
	if (num == 0) return 1;
	return Math.ceil(Math.log10(Math.abs(num)));
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
		console.log('Pass' + k + ' ' + nums);
	}
	console.log(nums);
	return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
