import './App.scss';
import {Component} from 'react';
import CardList from './componenst/card-list/card-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({cats: users}));
  }
  render() {
    return (
      <div className="App">
        <h1>Cats Catrex</h1>
        <CardList cats={this.state.cats}></CardList>
      </div>
    );
  }
}

export default App;
