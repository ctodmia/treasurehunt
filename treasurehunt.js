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

var Location = function (i, j) {
	this.position = [i,j]
	this.neighbor = [[i-1, j], [i, j+1], [i+1, j], [i, j-1]]
}

var Queue = function() {
	var store = [];
	this.add = function(pair) {
		store.push(pair);
	}
	this.pop = function () {
		store.shift();
	}
}
//start and target are both instances of the location 
//example:
//var begin = new Location(2,3);
//var final = new Location (12, 10);

var findTreasure = function(start, target) {

}