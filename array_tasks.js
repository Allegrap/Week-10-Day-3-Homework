var arrayTasks = {

	concat: function (arr1, arr2) {
		for (var i = 0; i < arr2.length; i++) {
		    arr1.push(arr2[i]);
		  }
		  return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		newArray = [];
		for(item of arr){
			newItem = item * item;
			newArray.push(newItem);
		}
		return newArray;
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
