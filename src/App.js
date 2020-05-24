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
      name: "Chiru"
    }
  }

  changeName() {
    this.setState({name: 'CSK'});
  }

  render() {
    return (
      <div className="App">
        <p>Hello, {this.state.name}!!!</p>
        <button onClick={() => this.changeName()}>Change Name</button>
      </div>
    )
  }
}

export default App;
