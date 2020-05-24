import React, { Component } from 'react';
import './App.css';

// function component
/* function App() {
  return (
    <div className="App">
        <p>Hello, CSK!!!</p>
    </div>
  );
} */

class App extends Component {
  constructor() {
    super();

    this.state = {
      family_name: "Bhaskaruni",
      members: [
        "Lakshmi Narayana",
        "Sheshamba Devi",
        "Gopichand Kumar",
        "Swapna Rama",
        "Chiranjeevi"
      ]
    }
  }

  /* changeName() {
    this.setState({name: 'CSK'});
  } */

  render() {
    return (
      <div className="App">
        <p>Hello, {this.state.name}!!!</p>
        <button onClick={() => this.changeName()}>Change Name</button>
        {
          this.state.members.map((member, index) => <h1 key={index}>{member}</h1>)
        }
      </div>
    )
  }
}

export default App;
