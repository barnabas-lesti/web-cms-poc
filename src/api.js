import fetch from 'isomorphic-fetch';

export function fetchPost (postGroup, postId) {
  return fetch('http://www.mocky.io/v2/5c1b664533000067007fd758')
    .then(response => response.json());
}
