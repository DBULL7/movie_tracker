import React, { Component } from 'react'
 import { Route , Redirect } from 'react-router'

export default class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        password: '',
        retypedPassword: '',
        emailTaken: false,
    }
  }

  updateState(input, stateKey) {
    this.setState({[stateKey]: input})
  }


  emailRegex() {
    if (this.state.email !== '') {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(this.state.email)
    }
  }


  passwordsMatch() {
    return (this.state.retypedPassword !== '' && this.state.password === this.state.retypedPassword)
  }

  nameAndEmail() {
    return (this.state.name !== '' && this.emailRegex())
  }

  addToDataBase() {
    fetch("api/users/new", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: this.state.name,
             email: this.state.email,
             password: this.state.password})
    }).then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.props.handleCreateAccount({id: data.id, name: this.state.name, email: this.state.email})
        localStorage.setItem('MovieTracker', JSON.stringify({id: data.id, email: this.state.email, password: this.state.password}))
        this.props.history.replace('/')
      }).catch((error) => {
        console.log(error);
      })
  }

  checkDatabase() {
    if(this.passwordsMatch() && this.nameAndEmail()) {
      fetch('/api/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: this.state.email, password: this.state.password})
      }).then((results) => {
        if (results.status === 200) {
          this.setState({emailTaken: true})
        } else {
          this.addToDataBase()
          // console.log(results)
        }
      })
    }
  }

  disableButton() {
    return (this.passwordsMatch() && this.nameAndEmail())
  }

  fadeOut() {
    setTimeout(() => {
      this.setState({emailTaken: false})
    }, 2500)
  }

  failedMessage() {
    if (this.state.emailTaken) {
      return (
        <div className="failed-login">Email taken. Please Try Again.
          {this.fadeOut()}
        </div>
      )
    }
  }

  render() {
    return (
      <section id="CreateAccount">
        <article id="form">
          {this.failedMessage()}
          <h2 id="create-account-title">Create Account</h2>
          <input value={this.state.name} onChange={(e) => {this.updateState(e.target.value, 'name')}} className="create-account-form name" type='text' placeholder='Name'/>
          <input value={this.state.email} onChange={(e) => {this.updateState(e.target.value, 'email')}} className="create-account-form email" type='text' placeholder='Email'/>
          <input type="password" value={this.state.password}  onChange={(e) => {this.updateState(e.target.value, 'password')}} className="create-account-form password" type='text' placeholder='Enter Your Password'/>
          <input type={"password"} value={this.state.retypedPassword} onChange={(e) => {this.updateState(e.target.value, 'retypedPassword')}} className="create-account-form retypedPassword" type='text' placeholder='Retype Your Password'/>
          <button id="create-account-button" disabled={!(this.passwordsMatch() && this.nameAndEmail())} onClick={() => {this.checkDatabase()}} >Create Account</button>
        </article>

      </section>

    )
  }
}
