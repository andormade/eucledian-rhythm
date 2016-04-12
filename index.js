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

function split(arr) {
	var leftSide = [];
	var rightSide = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[0] === arr[i]) {
			leftSide.push(arr[i]);
		} else {
			rightSide.push(arr[i]);
		}
	}

	return {
		leftSide  : leftSide,
		rightSide : rightSide
	}
}

module.exports = function(length, beats) {
	var beat = Array(length);
	beat.fill('-', 0, length);
	beat.fill('.', 0, beats);

	while(uniqueElements(beat).length === 2) {
		console.log(beat);
		beat = move(
			split(beat).leftSide,
			split(beat).rightSide
		);
	}

	return beat.join('');
};
