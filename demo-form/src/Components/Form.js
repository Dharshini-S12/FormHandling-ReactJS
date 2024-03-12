import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:" "
      }
    //   handleName = event =>{
    //     this.setState({
    //         username: event.target.value
    //     })
    //   }
    handleName() {
        this.setState({
            username: "vghgjbh"
        })
    }
    }
  render() {
    return (
      <div>
        <form>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleName}></input>
            </div>
        </form>
      </div>
    )
  }
}

export default Form