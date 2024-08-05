import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor(props){
        super(props)
            this.state = {
                num: 0,     
            }
    }
    
    increase = () => {
        this.setState({
            num: this.state.num + 1,
        })
    }
    

  render() {
    return (
      <div>
        Box {this.props.num}
        {/* <p>{this.state.name}</p>  */}
      </div>
    )
  }
}
