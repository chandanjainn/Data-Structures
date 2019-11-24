// function naiveSearch(long, short) {
// 	var count = 0;
// 	for (var i = 0; i < long.length; i++) {
// 		for (var j = 0; j < short.length; j++) {
// 			if (short[j] !== long[i + j]) break;
// 			if (j === short.length - 1) count++;
// 		}
// 	}
// 	return count;
// }

function stringCount(string, searchFor) {
	let count = 0,
		pos = string.indexOf(searchFor);
	while (pos > -1) {
		++count;
		pos = string.indexOf(searchFor, ++pos);
	}
	console.log(count);
}
stringCount('lorie loled', 'lol');
//naiveSearch('lorie loled', 'lol');

// function isSubsequence(string,searchFor) {

// 	return (string.indexOf(searchFor) > -1) ?  true :  false

// 	}

// function isSubsequence(str1, str2) {
// 	var i = 0;
// 	var j = 0;
// 	if (!str1) return true;
// 	while (j < str2.length) {
// 	  if (str2[j] === str1[i]) i++;
// 	  if (i === str1.length) return true;
// 	  j++;
// 	}
// 	return false;
//   }

//   isSubsequence('iXs','This is a string may be it is not');
