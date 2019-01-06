import express from 'express';

import { h } from 'preact';
import render from 'preact-render-to-string';
import template from './template';
import App from '../client/App';

const app = express();

app.use('/assets', [
	express.static('assets'),
	express.static('build/assets'),
]);

app.get('**', (req, res) => {
	res.send(template(render(<App url={req.url} />)));
})

app.listen(4000);
