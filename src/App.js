import React, { Component } from 'react';
import './App.css';
import { MemberList } from './components/member-list/member-list.component';

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
      ],
      users: []
    }
  }

  /* changeName() {
    this.setState({name: 'CSK'});
  } */

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({users: users}))
  }

  render() {
    return (
      <div className="App">
        <p>Hello, {this.state.name}!!!</p>
        <button onClick={() => this.changeName()}>Change Name</button>
        <MemberList members={this.state.members}>
          <p>I'm child - <i>{this.state.family_name}</i></p>
        </MemberList>
      </div>
    )
  }
}

export default App;
