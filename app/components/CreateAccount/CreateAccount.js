import React, { Component } from 'react'

export default class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        password: '',
        retypedPassword: ''
    }
  }

  updateName(input) {
    this.setState({name: input})
  }

  updateEmail(input) {
    this.setState({email: input})
  }

  updatePassword(input) {
    this.setState({password: input})
  }

  updateRetypedPassword(input) {
    this.setState({retypedPassword: input})
  }

  test() {
    if(this.state.password.value === this.state.retypedPassword.value) {
      if(this.state.name !== '' && this.state.email !== '') {
        fetch("api/users/new", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name: this.state.name,
                 email: this.state.email,
                 password: this.state.password})
        }).then((response) => {
          this.props.handleCreateAccount(this.state)
          console.log(response)
        })
      }
    }
  }

  render() {
    return (
      <section id="CreateAccount">
        <article id="form">
          <h2 id="create-account-title">Create Account</h2>
          <input value={this.state.name} onChange={(e) => {this.updateName(e.target.value)}} className="create-account-form" type='text' placeholder='Name'/>
          <input value={this.state.email} onChange={(e) => {this.updateEmail(e.target.value)}} className="create-account-form" type='text' placeholder='Email'/>
          <input value={this.state.password} onChange={(e) => {this.updatePassword(e.target.value)}} className="create-account-form" type='text' placeholder='Enter Your Password'/>
          <input value={this.state.retypedPassword} onChange={(e) => {this.updateRetypedPassword(e.target.value)}} className="create-account-form" type='text' placeholder='Retype Your Password'/>
          <button onClick={() => {this.test()}} className="create-account-button">Create Account</button>
        </article>

      </section>

    )
  }
}
