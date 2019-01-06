import { h, Component } from 'preact';
import { Link } from 'preact-router';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Router from './Router';

export default class App extends Component {
	constructor () {
		super();

		// this.state = ...

		// this.method = this.method.bind(this);
	}

	// method () {
	// 	this.setState({
	// 		count: --this.state.count,
	// 	});
	// }

	render ({ url }) {
		return (
			<div class="App">
				<Header />
				<div class="App_content">
					<Router url={url} />
				</div>
				<Footer />
			</div>
		);
	}
}
