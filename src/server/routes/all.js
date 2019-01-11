import viewTemplate from '../common/viewTemplate';
import contentService from '../services/contentService';

export default function staticPages (router) {
	router.route('/:staticPageId')
		.get(async (req, res, next) => {
			const [ page, settings ] = await Promise.all([
				contentService.getStaticPageData(req.params.staticPageId),
				contentService.getSettings(),
			]);
			res.send(viewTemplate(page, settings));
			next();
			return;
		});
	return router;
}
