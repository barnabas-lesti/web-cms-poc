import React, { Component } from 'react';
import urlJoin from 'url-join';

export default class ListItem extends Component {
	render() {
		const {
			description,
			title,
			url,
			featuredImageUrl,
		} = this.props;
		return (
			<a className="ListItem" href={url}>
				{featuredImageUrl &&
					<div
						className="ListItem_featuredImage"
						style={{ backgroundImage: `url(${ featuredImageUrl })` }}
					></div>
				}
				<h2 className="ListItem_title">{title}</h2>
				<p className="ListItem_description">{description}</p>
				<span className="ListItem_cta">Check out the posts</span>
			</a>
		);
	}
}
