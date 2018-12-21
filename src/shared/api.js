import fetch from 'isomorphic-fetch';

export function fetchPopularRepos (language = 'all') {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error);
      return null;
    });
}

export function fetchPost (postGroup, postId) {
  return fetch('http://www.mocky.io/v2/5c1b664533000067007fd758')
    .then(response => response.json());
}