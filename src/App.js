import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About  from './components/About';
import Contact from './components/Contact';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.getTodos()
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: data
        })
      });
  }
  
  getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
  }
  
  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <header className="App-header">
          Le routage
        </header>
        <Router>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Todos todos={this.state.todos} /> */}

        </Router>
      </div>
    );
  }
}

export default App;
