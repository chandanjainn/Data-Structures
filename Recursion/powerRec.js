// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, pow) {
	if (base == 1) return 1;
	if (base == 0) return 0;
	if (pow == 1) return base;
	if (pow == 0) return 1;
	return base * power(base, pow - 1);
}
power(2, 4);
