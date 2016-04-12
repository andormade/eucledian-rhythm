function move(arr1, arr2) {
	var counter = 0;
	for (var i = 0; i < arr2.length; i++) {
		arr1[counter] = arr1[counter] + arr2[i];
		counter++;
		if (counter >= arr1.length) {
			counter = 0;
		}
	}
	return arr1;
}

function uniqueElements(arr) {
	return arr.filter(function(v, i) { return i == arr.lastIndexOf(v); });
}

function split(beat) {
	var leftSide = [];
	var rightSide = [];

	for (var i = 0; i < beat.length; i++) {
		if (beat[0] === beat[i]) {
			leftSide.push(beat[i]);
		} else {
			rightSide.push(beat[i]);
		}
	}

	return {
		leftSide  : leftSide,
		rightSide : rightSide
	}
}

function rhythm(length, beats) {
	var beat = Array(length);
	beat.fill('-', 0, length);
	beat.fill('.', 0, beats);

	while(uniqueElements(beat).length === 2) {
		beat = move(
			split(beat).leftSide,
			split(beat).rightSide
		);
	}

	return beat.join('');
}

module.exports = rhythm;
