import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/shanreed`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
  
}

export default App;
