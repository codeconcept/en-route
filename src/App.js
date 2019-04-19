import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About  from './components/About';
import Contact from './components/Contact';
import TodoDetails from './components/TodoDetails';

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
        <Router>
        <header className="App-header">
          Le routage
          <Link to={'/todos'}>A faire</Link>
          <Link to="/about">A propos</Link>
          <Link to="/contact">Contact</Link> 
        </header>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />            
          <Route path="/todos" render={() => (
            <Todos todos={this.state.todos} />
          )} />
          <Route path="/todos/:id" component={TodoDetails}/>

        </Router>
      </div>
    );
  }
}

export default App;
