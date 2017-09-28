import React from 'react';
import TweeterForm from './TweeterForm';
import Post from './Post';

class Home extends React.Component {
  state = { posts: [] }

  addPost = (post) => {
    let { posts } = this.state;
    this.setState({ posts: [post, ...posts] })
  }

  render() {
    return (
      <div>
        <TweeterForm addPost={this.addPost} />
      </div>
    )
  }

}

export default Home;
