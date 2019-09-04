import React from 'react';
import axios from 'axios'
import './App.css';

import User from './components/user';
import Followers from './components/followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      followers:[]
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/shanreed`)
      .then(res => {
        const user = res.data;
        this.setState({ user: user });
        console.log(this.state.user);
      })
      axios.get(`https://api.github.com/users/shanreed/followers`)
      .then(res => {
        const followers = res.data
        console.log(followers)
        followers.forEach(person => {
          axios
            .get(`https://api.github.com/users/${person.login}`)
            .then(res => {
              this.setState(prevState => {
                const list = [...prevState.followers, res.data];
                return { followers: list };
              });
            });
        });
        
      })

  }

  render() {
    return (
      <div className="App">
        <User data = {this.state} />
        <h1>FOLLOWERS</h1>
        {this.state.followers
          ? this.state.followers.map(person => {
              return <Followers user={person} key={person.login}/>;
            })
          : null}

      </div>
    );
  }
  
}

export default App;
