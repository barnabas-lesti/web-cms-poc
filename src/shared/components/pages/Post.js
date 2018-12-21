import React, { Component } from 'react';
import { fetchPost } from '../../api';

class Post extends Component {
  constructor(props) {
    super(props);

    const post = __isBrowser__ ? window.__INITIAL_DATA__ : props.staticContext;

    this.state = {
      loading: false,
      post,
    };
  }

  componentDidUpdate (prevProps) {
    const { postGroup: prevPostGroup, postId: prevPostId } = prevProps.match.params;
    const { postGroup, postId } = this.props.match.params;
    if (prevPostId !== postId || postGroup !== prevPostGroup) {
      this.fetchPost();
    }
  }

  componentDidMount () {
    if (!this.state.post) {
      this.fetchPost();
    }
  }

  fetchPost () {
    const { postGroup, postId } = this.props.match.params;
    this.setState(() => ({
      loading: true,
    }));

    fetchPost(postGroup, postId)
      .then(post => {
        this.setState(() => ({
          loading: false,
          post,
        }));
      });
  }

  render() {
    const { post, loading } = this.state;

    return (
      <div>
        {loading &&
          <p>Loading</p>
        }
        {!loading && post &&
          <p>{post.title}</p>
        }
      </div>
    );
  }
}

export default Post;
