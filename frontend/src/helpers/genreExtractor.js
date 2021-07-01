export const uniqueGenre = (objectOfData) => {
	let arrayOfGenres = [];
	if (objectOfData) {
		objectOfData.movies.forEach((object, index) => {
			for (var prop in object) {
				if (prop === "genres") {
					object.genres.forEach((value, key) => {
						if (!arrayOfGenres.includes(value)) {
							arrayOfGenres.push(value);
						}
					});
				}
			}
		});
	}

	return arrayOfGenres;
};
