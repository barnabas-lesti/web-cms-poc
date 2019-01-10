import axios from 'axios';

import config from '../common/config';
import Service from './Service';

class HttpService extends Service {

	/**
	 * Application HttpService.
	 */
	constructor () {
		super();

		this._handler = axios.create({
			baseURL: config.api.API_URL,
		});
	}

	/**
	 * Base GET function.
	 *
	 * @param {String} url URL to fetch data from
	 * @returns {Promise<Object>} Data promise
	 */
	async get (url) {
		const { data } = await this._handler.get(url);
		return data;
	}
}

const httpService = new HttpService();
export default httpService;
