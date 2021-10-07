import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.jsx';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      monsters: users,
      filteredMonsters: users
    }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className='h1'>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  } 

  handleChange = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }
}

export default App;
