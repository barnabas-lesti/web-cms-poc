import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		const {
			copyrightText,
			menuItems,
			social,
		} = this.props;
		return (
			<footer className="Footer">
				<div className="Footer_container">
					<ul className="Footer_links">
						{menuItems && menuItems.map((menuItem, index) =>
							<li key={index}>
								<a href={menuItem.path}>{menuItem.label}</a>
							</li>
						)}
					</ul>
					<div className="Footer_social">
						{social && social.map((socialItem, index) =>
							<a
								key={index}
								href={socialItem.url}
								target="_blank">
								<img
									src={socialItem.imageUrl}
									alt={socialItem.label}
								/>
							</a>
						)}
					</div>
					{copyrightText &&
						<p className="Footer_rights">{copyrightText}</p>
					}
				</div>
			</footer>
		);
	}
}
