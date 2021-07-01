import axios from "axios";
const { REACT_APP_BASE_URL, REACT_APP_AUTH_API_CONFIG } = process.env;

export default {
	getMovies: async function () {
		try {
			const response = axios.get(REACT_APP_BASE_URL, {
				headers: { Authorization: REACT_APP_AUTH_API_CONFIG },
			});
			return response;
		} catch (error) {
			throw error;
		}
	},
};
