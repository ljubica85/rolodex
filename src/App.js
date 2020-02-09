import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/Card-list";
import { SearchBox } from "./components/search-box/Search-box";
import { Choise } from "./components/choise/Choise";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      entity:2
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
    this.setState({ entity: e });
  };

  render() {
    const { monsters, searchField, entity } = this.state;
    const filteredMonsers = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Roloodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        /><Choise handleClick={this.handleClick} />
        <CardList monsters={filteredMonsers} entity={entity} />
      </div>
    );
  }
}

export default App;
