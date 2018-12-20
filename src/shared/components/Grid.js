import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);

    const repos = __isBrowser__ ? window.__INITIAL_DATA__ : props.staticContext.data;

    this.state = {
      repos,
      loading: repos ? false : true,
    };

    this.fetchRepos = this.fetchRepos.bind(this)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id);
    }
  }

  componentDidMount () {
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id);
    }
  }

  fetchRepos (lang) {
    this.setState(() => ({
      loading: true,
    }));

    this.props.fetchInitialData(lang)
      .then((repos) => this.setState(() => ({
        repos,
        loading: false,
      })));
  }

  render() {
    const { repos, loading } = this.state;

    return (
      <div>
        {loading &&
          <p>Loading</p>
        }
        {!loading &&
          <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
            {repos.map(({ name, owner, stargazers_count, html_url }) => (
              <li key={name} style={{ margin: 30 }}>
                <ul>
                  <li>
                    <a href={html_url}>{name}</a>
                  </li>
                  <li>@{owner.login}</li>
                  <li>{stargazers_count} stars</li>
                </ul>
              </li>
            ))}
          </ul>
        }
      </div>



    );
  }
}

export default Grid;
