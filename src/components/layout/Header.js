import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class header extends Component {
  render() {
    return (
      <div style={{ fontFamily: "Trebuchet MS, sans-serif", color: "dimgray"}} className="text-center py-3 bg-dark">
        
        <div className="float-start mt-3">
          <Link className="btn btn-secondary ms-3 me-3" to="/">Home</Link> {''}
          <Link className="btn btn-secondary" to="/about">About</Link>
        </div>
        <h1 className="mt-3 me-5">To-Do List</h1>
      </div>
    )
  }
}

export default header
