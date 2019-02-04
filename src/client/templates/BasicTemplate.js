import React, { Component } from 'react';
import hljs from 'highlightjs/highlight.pack';

import Listing from '../modules/Listing';

export default class BasicTemplate extends Component {
	static templateName = 'BasicTemplate';

	componentDidMount () {
		hljs.initHighlightingOnLoad();
	}

	render() {
		const {
			content,
			subPages,
		} = this.props;
		return (
			<div className="BasicTemplate">
				<div className="BasicTemplate_content" dangerouslySetInnerHTML={{ __html: content }}></div>
				{subPages &&
					<Listing items={subPages} />
				}
			</div>
		);
	}
}
