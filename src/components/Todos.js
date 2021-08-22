import React, { Component } from 'react'
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

export class Todos extends Component {
  render() {
    return (
      this.props.todos.map((todo) => (
      <Todoitem key={todo.id} todo={todo} markComplete=
      {this.props.markComplete} delTodo={this.props.delTodo} />
      ))
    );
  }
}

//defining type of prop being passed in
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
