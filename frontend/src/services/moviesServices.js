import axios from "axios";
import { BASE_URL, AUTH_API_CONFIG } from "../";

export default {
	getMovies: async function () {
		try {
			const response = axios.get(BASE_URL, AUTH_API_CONFIG);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
