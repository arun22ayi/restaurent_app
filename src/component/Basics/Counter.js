import React, { Component } from 'react'

export default class Counter extends Component {


componentDidUpdate(prevprops,prevState){
    console.log(prevprops.number)
    console.log(this.props.number)

    if(prevprops.number !== this.props.number){
        console.log("Component Updated")
    }
}
componentWillUnmount() {
    console.log('component removed');
  }

  render() {
    return (
      <div>
      <p>{this.props.number}</p>
      </div>
    )
  }
}
