import React, { Component } from 'react';

export default class NotFoundTemplate extends Component {
	static templateName = 'NotFoundTemplate';

	render() {
		return (
			<div className="NotFoundTemplate page container">
				<img src="/assets/images/not-found.jpg" />
				<h1>
					Page not found, sorry...
				</h1>
			</div>
		);
	}
}
