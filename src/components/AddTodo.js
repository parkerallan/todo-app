import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ textAlign: "center"}}>
        <input 
          style={{width: "65%", paddingLeft: "15px"}} 
          className="mx-3 mt-3" 
          type="text" 
          name="title" 
          value={this.state.title}
          onChange={this.onChange}
          placeholder="New To-Do...">
        </input>
        {/* <button 
          type="button"
          value="Submit"
          className="btn btn-primary">Add
        </button> */}
        <input
          type="submit"
          value="Submit"
          className="submit">
        </input>
      </form>
    )
  }
}

export default AddTodo
