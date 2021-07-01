export const uniqueGenre = (objectOfData) => {
	let arrayOfGenres = [];
	if (objectOfData) {
		objectOfData.movies.forEach((object, index) => {
			for (var prop in object) {
				if (prop === "genres") {
					// console.log("object", object);
					object.genres.forEach((value, key) => {
						if (!arrayOfGenres.includes(value)) {
							arrayOfGenres.push(value);
						}
					});
				}
			}
		});
	}
	// console.log(objectOfData);
	// if (objectOfData) {
	// 	for (var key in objectOfData) {
	// 		if (key === "genres") {
	// 			console.log("key", key);
	// 			objectOfData.genres.forEach((element, index) => {
	// 				console.log(element);
	// 				if (!arrayOfGenres.includes(element)) {
	// 					arrayOfGenres.push(element);
	// 				}
	// 			});
	// 		}
	// 	}
	// 	// objectOfData.forEach((value, key) => {
	// 	// 	if (key === "genres") {
	// 	// 	}
	// 	// });
	// }
	return arrayOfGenres;
};

// export default uniqueGenre;
