import React, { Component } from 'react';

import ListItem from './ListItem';

export default class Listing extends Component {
	render() {
		const {
			items,
		} = this.props;
		return (
			<div className="Listing">
				{items && items.map((item, index) =>
					<div
						key={index}
						className="Listing_item"
					>
						<ListItem
							description={item.description}
							title={item.title}
							url={item.pagePath}
							featuredImageUrl={item.featuredImageUrl}
						/>
					</div>
				)}
			</div>
		);
	}
}
