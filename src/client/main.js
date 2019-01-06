import { h, render } from 'preact';
import App from './App';

import './styles/main.scss';

const app = document.getElementById('app');

render(
	<App />,
	app,
	app.lastChild,
);
