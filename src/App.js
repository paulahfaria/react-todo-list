import React, { Component } from 'react';
import List from './List';
import './index.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      term: '', //to store what we passing as a value to our input
      items: [] //to store every value which we passing to our todo list
    }
  }

  onChange = (event) =>{
    this.setState({term: event.target.value});
    console.log(this.state.term);
  }

  onSubmit = (event) =>{
    event.preventDefault();

    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }
  render() {
    return (
        <div className="container">
          <h1>To do list</h1>

          <form className="App" onSubmit={this.onSubmit}>
            <label htmlFor="">Cadastre uma nova tarefa:</label>
            <input type="text" value={this.state.term} onChange={this.onChange}/>
            <button>adicionar</button>
          </form>

          <List items={this.state.items} quantity={this.state.items.length}/>
        </div>
    );
  }
}

export default App;
