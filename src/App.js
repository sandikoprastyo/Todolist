import React, { Component } from 'react';
import './App.css';



class App extends Component
{

  constructor()
  {
    super();
    this.state = {
      todos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e)
  {
    e.preventDefault();
    var task = this.refs.task.value;
    this.state.todos.push({ task, id: +new Date() });
    this.setState({
      todos: this.state.todos
    });
    this.refs.task.value = '';
  }

  renderHasil()
  {
    if (this.state.todos.length)
    {
      var todos = this.state.todos.map((todo, i) =>
      {
        return <li key={i}>{todo.task}</li>
      });
      return (
        <ul>{todos}</ul>
      );
    }
    return null
  }





  render()
  {
    return (
      <div className="App">
        <h1 className="title" >To do List</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" ref="task" placeholder="Masukan To do" />
            <br />
            <button className="btn">Add Todo</button>
            {this.renderHasil()}
          </form>
        </div>
      </div>
    );
  }
}





export default App;
