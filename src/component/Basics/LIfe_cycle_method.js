import React, { Component } from 'react'
import Counter from './Counter';
import Counter1 from '../Counter1';

export default class LIfe_cycle_method extends Component {


//3 Phases----------> 
// Mounting--first some loading
// Updating--if we are updating
// Unmounting--if we are removing any component

//Component load or render for first time

constructor(){               //before loading or rendering if we need to initialize varible then need to use constructor
  super();
this.state={              //state object
  count:0
}
}



componentDidMount() {
  console.log("componentDidMount : When component render first time");
}

increment(){                      
  this.setState({count: this.state.count + 1})    // mutuable state value can be change , while using props can't change so those immutable
}

componentWillUnmount() {
  console.log('component removed');
}

  render() {
    return (
      <div class="life_cycle_method">
      <h1>Hello Ajay</h1>
      

      <button onClick={()=>{ this.increment() }}>Click Me</button>
      <Counter1 number={this.state.count} ></Counter1>  
     
    
      </div>
    )
  }
}






