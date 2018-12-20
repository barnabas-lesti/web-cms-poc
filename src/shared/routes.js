import { fetchPopularRepos } from './api';

import Home from './components/Home';
import Grid from './components/Grid';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(
      path.split('/').pop(),
    ),
  },
];

export default routes;
