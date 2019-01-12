import viewTemplate from '../common/viewTemplate';
import contentService from '../services/contentService';

export default function staticPages (router) {
	router.route('/:staticPageId')
		.get(async (req, res) => {
			const { settings } = res.locals.common;
			const page = await contentService.getStaticPageData(req.params.staticPageId);
			res.send(viewTemplate(page, settings));
			return;
		});
	return router;
}
