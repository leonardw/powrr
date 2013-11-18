var primality = require('primality');

function find(a, b) {
	var ps = [];
	for (var i=a; i<=b; i++) {
		if (primality(i)) {
			ps.push(i);
		}
	}
	return ps;
}

module.exports = find;
