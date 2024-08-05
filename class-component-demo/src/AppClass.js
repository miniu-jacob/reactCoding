import React, { Component } from 'react'
import BoxClass from './component/BoxClass'


/* Class 컴포넌트 만들기
    1. state 만들기
        - class 컴포넌트 안에는 객체를 만들고 여러 개의 state를 관리할 수 있다.
        
    */


export default class AppClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter2: 0, 
            num: 1, 
            value: 0
        }
    }

    increase = () => {
        this.setState({counter2: this.state.counter2 + 1,
            value: this.state.value +1
        })
    }
    
    
  render() {
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭하삼!</button>
        <BoxClass num={this.state.value} ></BoxClass>
        
      </div>
    )
  }
}
