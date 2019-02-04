import React, { Component } from 'react';

export default class AboveTheFold extends Component {
	render() {
		const {
			backgroundImageUrl,
			children,
		} = this.props;
		return (
			<div className="AboveTheFold">
				<div className="AboveTheFold_content">
					{children}
				</div>
				<div
					className="AboveTheFold_image"
					style={{ backgroundImage: `url("${backgroundImageUrl}")` }}
				></div>
				<div className="AboveTheFold_overlay"></div>
			</div>
		);
	}
}
