import { fetchPost } from './api';

import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import Post from './components/pages/Post';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/:postGroup',
    exact: true,
    component: Posts,
  },
  {
    path: '/:postGroup/:postId',
    exact: true,
    component: Post,
    fetchInitialData ({ postGroup, postId }) {
      return fetchPost(postGroup, postId);
    },
  },
];

export default routes;
