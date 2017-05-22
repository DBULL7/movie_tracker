import React from 'react'

export const popUp = (exitPopup, changePath) => {
  return (
    <article className='popup'>
      <div className='popup-header'>
        <button className='popup-exit-button' onClick={() => {exitPopup()}}>&times;</button>
      </div>
      <div>
        <p className='popup-message'>Login or Create an Account to Favorite Movies</p>
        <div className='popup-buttons'>
          <button className='login-popup-button' onClick={() => {changePath('Login')}}>Login</button>
          <button className='createAccount-popup-button' onClick={() => {changePath('CreateAccount')}}>CreateAccount</button>
        </div>
      </div>
    </article>
  )
}
