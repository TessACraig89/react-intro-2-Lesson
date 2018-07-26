// bring in React and Component instance from react
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  // when our component is initialized,
  // our constructor function is called
  // what should the component render
  constructor (props) {
    // must always call super before any other statment in constructor otherwise this.props will be undefined
    super()
    // define an initial state
    this.state = {
      counter: 0 // initialize this.state.counter to be 0
    }
  }
  //trigger event
  handleClick (e) {
    // when setState is run our component does a "diff", comparing the virtual DOM node with an updated state to the current DOM
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render () {
    // Make sure to return some UI
    /*{this.props.name}reference to that data via as a property on the props object*/
    // We use an attribute called onClick to define what happens when we click this button. As it's value, we're passing in an anonymous function that invokes handleClick, a function defined on this component.
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
        <p>The initial count is {this.state.counter}
       </p>
       <button onClick={(e) => this.handleClick(e)}>click me!</button>
      </div>
    )
  }
}

export default Hello
