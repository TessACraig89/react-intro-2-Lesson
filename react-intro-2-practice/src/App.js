// bring in React and Component instance from react
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  // when our component is initialized,
  // our constructor function is called
  // what should the component render
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      counter: 0 // initialize this.state.counter to be 0
    }
  }
  render () {
    // Make sure to return some UI
    /*{this.props.name}reference to that data via as a property on the props object*/
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
      </div>
    )
  }
}

export default Hello
