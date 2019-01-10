import Service from './Service';
import httpService from './httpService';

/**
 * Content logic related service.
 */
class ContentService extends Service {
	constructor () {
		super();
	}

	async getStaticPageData (pageId) {
		const pageData = await httpService.get(`/staticPages/${ pageId }`);
		return pageData;
	}
}

const contentService = new ContentService();
export default contentService;
