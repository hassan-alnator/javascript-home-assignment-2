//Axios get movies.DONE
import React from "react";
import BaseComponent from "./components/base/Base";
import "./App.css";

const App = () => {
	// const [arrayOfGenre, setArrayOfGenre] = useState([]);

	//!! Clean App.js
	//Search
	//image-lazy-component || lazy load

	//useEffect works as componentDidMount in class components.
	// useEffect(() => {
	// 	//Using Axios to fetch data from server API passing authorization key in headers with the request.
	// 	axios
	// 		.get("https://wookie.codesubmit.io/movies", {
	// 			headers: {
	// 				Authorization: "Bearer Wookie2021",
	// 			},
	// 		})
	// 		//handling the request response if response was 202 ( accepted )
	// 		.then((response) => {
	// 			setMovies(response.data);
	// 			// getGenre(response.data.movies);
	// 			// console.log(arrayOfGenre);
	// 		})
	// 		//handling server/request errors with catch block
	// 		.catch((error) => {
	// 			if (error) {
	// 				console.error(error);
	// 			}
	// 		});
	// }, []);

	// var filteringGenres = (oneObject) => {
	// 	console.log(oneObject);
	// 	if (oneObject.genres) {
	// 		return oneObject.genres[0];
	// 	}
	// 	return false;
	// };
	// //use React state
	// const getGenre = (objectOfMovies) => {
	// 	if (objectOfMovies) {
	// 		var x = objectOfMovies.filter(filteringGenres);
	// 		console.log("objectOfMovies", x);
	// 		setArrayOfGenre();
	// 	}
	// };

	return (
		<div>
			<div>
				<BaseComponent />
			</div>
		</div>
	);
};

export default App;
