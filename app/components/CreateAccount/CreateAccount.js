import React from 'react'

export const CreateAccount = () => {
  return (
    <section id="CreateAccount">
      <article id="form">
        <h2 id="create-account-title">Create Account</h2>
        <input className="create-account-form" type='text' placeholder='Name'/>
        <input className="create-account-form" type='text' placeholder='Email'/>
        <input className="create-account-form" type='text' placeholder='Enter Your Password'/>
        <input className="create-account-form" type='text' placeholder='Retype Your Password'/>
        <button className="create-account-button">Create Account</button>
      </article>

    </section>

  )
}
