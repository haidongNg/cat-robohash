import './App.scss';
import {Component} from 'react';
import CardList from './componenst/card-list/card-list';
import SearchBox from './componenst/search-box/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: '',
    };
  }

  /**
   * Init get API
   */
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({cats: users}));
  }

  /**
   * Search
   */
  handleChange(e) {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {cats, searchField} = this.state;
    // Filter
    const filteredCats = cats.filter(cat =>
      cat.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="App">
        <h1>Cats RoboHash</h1>
        <SearchBox
          placeholder="Search cats"
          handleChange={e => this.handleChange(e)}
        />
        <CardList cats={filteredCats}></CardList>
      </div>
    );
  }
}

export default App;
