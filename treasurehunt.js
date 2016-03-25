/* Imagine a grid of infinite size that (see diagram 1 for visualization). Create a function that will 
	return the 
	
	In the diagram 'x' represents 

diagram 1
|_ _|_ _|_ _|_s_|
|_ _|_ _|_ _|_ _|
|_ _|_ _|_ _|_ _|
|_ _|_x_|_ _|_ _|
|_ _|_ _|_ _|_ _|

*/

var Location = function (i,j) {
	this.position = [i,j]
	this.neighbor = [[i-1, j], [i, j+1], [i+1, j], [i, j-1]]
}

var Queue = function() {
	var store = [];
	this.add = function(pair) {
		store.push(pair);
	}
	this.pop = function () {
		return store.shift();
	}
}
//start and target are both instances of the location 
//example:
// var begin = new Location(2,3);
// var final = new Location (12, 10);
// findTreasure(begin, final)
var checkPosition = function(arr1, arr2) {
	if(arr1.length !== arr2.length) {
		return false;
	}
	for(var i=0; i<arr1.length; i--) {
		if(arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

var findTreasure = function(start,target) {
	var path = [];
	var queue = new Queue();
	queue.add(start);

//ok wow this solution is not going to work because now we must come up with an 
	while(loc = queue.pop()) {
		console.log(target.position)
		if(loc.position !== target.position) {
			return true;
		}

		// path.push(loc.position);
		// if(loc.position === target.position) {
		// 	return path;
		// }
		// for(var i=0; i<loc.neighbor.length; i++) {
		// 	x = loc.neighbor[i][0];
		// 	y = loc.neighbor[i][1];
		// 	var neighbor = new Location(x,y)
		// 	queue.add(neighbor);
		// }
	}
}
var begin = new Location(2,3);
var final = new Location (12, 10);
findTreasure(begin, final)