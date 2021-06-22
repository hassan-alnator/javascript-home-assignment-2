import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
	const [movies, setMovies] = useState([]);
	const axios = require("axios").default;

	useEffect(() => {
		axios
			.get("https://wookie.codesubmit.io/movies", {
				headers: {
					Authorization: "Bearer Wookie2021",
				},
			})
			.then((response) => {
				console.log("response from Axios.get Movies", response);
				setMovies(response.data);
			})
			.catch();
	}, []);

	return <div>hello App</div>;
};

export default App;
