import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';

import template from './template';
import routes from '../shared/routes';

import App from '../shared/components/App';

const app = express();

app.use(cors());

app.use('/public', [
  express.static('public'),
  express.static('build/public'),
]);

// Favicon fcked up routing a bit, so for now I'll leave this here.
app.use((req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).send();
  } else {
    next();
  }
});

app.get('*', (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData({ postGroup: 'asdf', postId: 'adf' }) : Promise.resolve();
  promise
    .then(data => {
      const markup = renderToString(
        <StaticRouter location={req.url} context={data}>
          <App />
        </StaticRouter>
      );
      res.send(template(
        markup,
        data,
      ));
    })
    .catch(next);
});

// for (const { path } of routes) {

// }

app.listen(3000, () => {
  console.log('Server is listening on port: 3000');
});
