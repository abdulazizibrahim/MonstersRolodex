import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/cards-list.component';
import './components/card-list/cards-list.component';
import {SearchBox} from "./components/search-box/search-box.components"
class App extends Component{

  constructor()
    {
      super();  
      this.state = {
        monsters:[],
        searchField :''
      };
    }
    componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // converting response to JSon format so that JSx can understand.
      .then(users => this.setState({monsters : users}));// fetching users and appending them into the monsters arraylist.
    }

    handleChange = (e) =>
    {
      this.setState({ searchField : e.target.value});
    };

    render(){
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))  
    return (
      <div className="App">
        <h1>Robots Rolodex </h1>
        <SearchBox placeholder = "Search Monster" handler = {this.handleChange}/>
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
