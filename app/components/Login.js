import React from 'react'

export const Login = () => {
  return (
    <section id="login">
      <h2 id="login-title">Login</h2>
      <input className="login-form" placeholder="Email"/>
      <input className="login-form" placeholder="Password"/>
      <button id="login-button">Login</button>
    </section>
  )
}
