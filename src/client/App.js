import React, { Component } from 'react';
import marked from 'marked';

import templates from './templates';
import NotFoundTemplate from './templates/NotFoundTemplate';

import Footer from './modules/Footer';
import Header from './modules/Header';

export default class App extends Component {
	render() {
		const { initialData } = this.props;
		const {
			page,
			settings,
		} = initialData;

		console.log(page);

		const {
			copyrightText,
			menuItems,
			siteLogoUrl,
			social,
		} = settings;

		let Template;
		let templateProps;
		if (page !== null) {
			Template = templates.filter(Template => Template.templateName === page.pageTemplate)[0];
			templateProps = {
				content: marked(page.content || ''),
				subPages: page.subPages,
			};
		} else {
			Template = NotFoundTemplate;
			templateProps = {};
		}

		return (
			<div className="App">
				<div className="App_content">
					<Header
						menuItems={menuItems}
						siteLogoUrl={siteLogoUrl}
					/>
					<Template
						{...templateProps}
					/>
				</div>
				<Footer
					copyrightText={copyrightText}
					menuItems={menuItems}
					social={social}
				/>
			</div>
		);
	}
}
