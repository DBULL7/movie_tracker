import React, { Component } from 'react'
import fetchMock from 'fetch-mock'

import { checkLocalStorage, autoLogin } from './checkLocalStorage'
import getNewFilms from './getNewFilms'
import { popUp } from './popUp'
import { singleMovieCard } from './singleMovieCard'
import getUsers from './usersApi'
import stubbedUsers from '../data/stubbedUsers.json'

import { mount, shallow } from 'enzyme';

describe('helper function abound', () => {

  const mockUsers = stubbedUsers

  it('popUp returns a goofy amount of html', () => {
    const popped = popUp()
    expect(popped).toEqual(<article className='popup'>
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
                          </article>)
  })

  it('getUsers returns list of created accounts', () => {
    fetchMock.post('/api/users', {
      status: "success",
      body: mockUsers,
    })

    fetchMock
  })

})
