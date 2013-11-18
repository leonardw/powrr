var primes = require('./prime')(0,100);


function wrr(weights) {
	var ws = weights.slice(0); //shallow clone

	var factors = [];
	var allDone = false;
	var zeroCount = 0, iteration = 0;
	for (var i=0, psz=primes.length; i<psz; i++) {
		var p = primes[i];
		
		var allDivisible;
		do {
			console.log('trying prime:', p);
			allDivisible = true;
			iteration++;
			for (var j=0, wsz=ws.length; j<wsz; j++) {
				var w = ws[j];
				var div = w / p;
				console.log('proc weight:%d div:%d', w, div);
				if (iteration==1 && w==0) {
					zeroCount++;
					console.log('zeros:', zeroCount);
					if (zeroCount == wsz) {
						//all zeros, quit
						allDivisible = false;
						allDone = true;
						break;
					}
				}
				if (w!=0 && div < 1) {
					//found non-zero minimum weight, no point trying larger primes. quit
					allDivisible = false;
					allDone = true;
					break;
				} else if (div == Math.floor(div)) {
					//divisible, store result for next iteration
					ws[j] = div;
				} else {
					//not divisible, skip other weights
					allDivisible = false;
					break;
				}
			}
			if (allDivisible) {
				//all divisible, store as a common factor
				factors.push(p);
				console.log('update factors:', factors);
			}
		} while (allDivisible);
		if (allDone) {
			break;
		}
	}
	console.log('factors:', factors);

	var gcf = 1;
	for (var i=0; i<factors.length; i++) {
		gcf *= factors[i];
	}
	console.log('gcf:', gcf);

	var total = 0;
	for (var i=0; i<weights.length; i++) {
		var norm = weights[i]/gcf;
		ws[i] = norm;
		total += norm;
	}
	console.log('original  :', weights);
	console.log('normalised:', ws);
	console.log('total', total);


	for (var i=0; i<ws.length; i++) {
//		ws[i] = [ws[i], total/ws[i], i];
		ws[i] = [ws[i], i, 0];
	}
	ws.sort(function(a,b){
		return b[0]-a[0];
	});
	console.log('sorted:', ws);

	var rota = [];
	//total = ws[0][0];
	console.log('total', total);
	for (var i=1, imax=total; i<=imax; i++) {
		for (var j=0, jmax=ws.length; j<jmax; j++) {
			var v = i * (ws[j][0]) / imax;
			var vi = Math.floor(v);
//			var v = (i+1) * (ws[j][0]) / imax;
//			var vi = Math.ceil(v);
//			console.log('item:%d v:%d i:%d w:', j, v, i);
			console.log('item:%d vi:%d v:%d', j, vi, v);
			if (vi != ws[j][2]) {
				rota.push(ws[j]);
				ws[j][2] = vi;
				console.log('add');
			}
		}
	}
	console.log('rota:', rota);
	
	return rota;
}


exports.wrr = wrr;
