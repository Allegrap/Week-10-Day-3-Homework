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
		var newArray = [];
		for(item of arr){
			newItem = item * item;
			newArray.push(newItem);
		}
		return newArray;
	},

	sum: function (arr) {
		var total = 0;
		for(item of arr){
			total += item;
		}
		return total;
	},

	// findDuplicates: function (arr) {
	// 	duplicates = [];
	// 	for(item of arr){
	// 		for(otherItem of duplicates){
	// 			if(otherItem === item){
	// 				duplicates.push(item);
	// 			}
	// 		}
	// 	}
	// 	return duplicates;
	// },

	removeAndClone: function (arr, valueToRemove) {
		newArray = [];

		for(item of arr){
			if(item != valueToRemove){
				newArray.push(item);
			}
		}
		return newArray;
	},

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
