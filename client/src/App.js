import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import PostList from './components/PostList';
// import TweeterForm from './components/TweeterForm';
import axios from 'axios';

class App extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/tweeter_posts')
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  addPost = () => {
    // Here you will update posts state
  }

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Tweeter Posts</Header>
        <hr />
        { /* <TweeterForm addPost={this.addPost} /> */ }
        <PostList posts={this.state.posts} cool="cool"/>
      </div>
    );
  }
}

export default App;
