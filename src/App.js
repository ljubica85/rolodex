import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/Card-list";
import { SearchBox } from "./components/search-box/Search-box";
import { Choice } from "./components/choice/Choice";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      entity:2,
      title:'Monsters'
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  handleClick = e => {
    const choice = ['Robo', 'Monster', 'Robo-head', 'Kitty']
    const title = choice[e-1];
    this.setState({ entity: e , title:title});
  };

  render() {
    const { monsters, searchField, entity } = this.state;
    const filteredMonsers = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>{this.state.title} Roloodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        /><Choice handleClick={this.handleClick} />
        <CardList monsters={filteredMonsers} entity={entity} />
      </div>
    );
  }
}

export default App;
