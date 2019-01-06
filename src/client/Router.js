import { h, Component } from 'preact';
import PreactRouter from 'preact-router';

import Home from './components/pages/Home';
import About from './components/pages/About';

export default class Router extends Component {
	render ({ url }) {
		return (
			<PreactRouter url={url}>
				<Home path="/" />
				<About path="/about" />
			</PreactRouter>
		);
	}
}
