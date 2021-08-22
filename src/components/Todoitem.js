import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle = () => {
    return {
      // background: '#f4f4f4',
      // padding: '10px',
      // borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className= "card m-3" style = {this.getStyle()}>
        <p className="card-body m-0 pt-4 pb-4">
        <input className="card-text" type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {''}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} type="button" className="btn btn-danger float-end">X</button>
        </p>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todoitem
