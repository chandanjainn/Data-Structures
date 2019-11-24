process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = '';
var input_array = '';

process.stdin.on('data', function(data) {
	input += data;
});

process.stdin.on('end', function() {
	input_array = input.split('\n');

	var res;
	var num_Of_Test = parseInt(input_array[0].trim(), 10);

	for (var i = 0; i < num_Of_Test; i++) {
		var _line = input_array[i + 1].trim();

		var line = _line.split(' ');

		var a = parseInt(line[0]);
		var b = parseInt(line[1]);
		res = a + b;

		process.stdout.write('' + res + '\n');
	}
});
