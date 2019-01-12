import viewTemplate from '../common/viewTemplate';
import contentService from '../services/contentService';

export default function posts (router) {
	router.route('/posts*')
		.get(async (req, res) => {
			const { path } = req;
			const { settings } = res.locals.common;
			const [ pageData, subPagesData ] = await Promise.all([
				contentService.getPostData(path),
				contentService.getPostsData(path)
			]);
			const page = pageData !== null ? {
				...pageData,
				subPagesData,
			} : null;
			res.send(viewTemplate(page, settings));
			return;
		});

	return router;
}
