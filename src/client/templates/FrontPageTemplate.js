import React, { Component } from 'react';

import AboveTheFold from '../modules/AboveTheFold';

export default class FrontPageTemplate extends Component {
	static templateName = 'FrontPageTemplate';

	render() {
		const {
			content,
		} = this.props;

		const featuredImageUrl = '';

		return (
			<div className="FrontPageTemplate">
				<AboveTheFold
					backgroundImageUrl={featuredImageUrl}
				>
					<h1>Lorem ipsum dolor sit amtet</h1>
					<p>In varius tempor purus, ac egestas elit auctor non. Vivamus arcu eros, efficitur vel justo vel, cursus malesuada nisl. </p>
				</AboveTheFold>
				<div
					className="FrontPageTemplate_container"
					dangerouslySetInnerHTML={{ __html: content }}
				></div>
			</div>
		);
	}
}
