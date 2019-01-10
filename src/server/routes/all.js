import viewTemplate from '../common/viewTemplate';
import contentService from '../services/contentService';

export default function staticPages (router) {
	router.route('/:staticPageId')
		.get(async (req, res, next) => {
			const page = await contentService.getStaticPageData(req.params.staticPageId);
			console.log(page);
			res.send(viewTemplate(page, { nope: 'nooope...' }));
			next();
		});
	return router;
}
