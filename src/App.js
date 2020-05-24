import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import Container from 'react-bootstrap/Container';
import { SearchBox } from './components/search-box/search-box.component';

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
      users: [],
      searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({searchValue: e.target.value})
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({users: users}))
  }
  
  render() {
    const {users, searchValue} = this.state;
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (
      <Container fluid className="p-3">
      <SearchBox handleChange={this.handleChange}/>
      <CardList users={filteredUsers} />
      </Container>
      )
    }
  }
  
  export default App;


  /* changeName() {
    this.setState({name: 'CSK'});
  } */

  // function component
  /* function App() {
    return (
      <div className="App">
          <p>Hello, CSK!!!</p>
      </div>
    );
  } */


  // <div className="App">
  //   <CardList users={this.state.users} />
  // </div>
  
// MemberList and Member components
/* 
  <p>Hello, {this.state.name}!!!</p>
  <button onClick={() => this.changeName()}>Change Name</button>
  <MemberList members={this.state.members}>
    <p>I'm child - <i>{this.state.family_name}</i></p>
  </MemberList>
*/
