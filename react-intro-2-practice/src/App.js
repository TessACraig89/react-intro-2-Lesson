// bring in React and Component instance from react
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    /*{this.props.name}reference to that data via as a property on the props object*/
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
}

export default Hello
