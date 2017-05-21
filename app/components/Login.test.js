import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginContainer from './LoginContainer';
import Login from './Login';
import rootReducer from '../reducers/rootReducer'
import fetchMock from 'fetch-mock'

describe('Login Component Tests', () => {
  it('it should shallow mount without crashing', () => {
    const storageMock = () => {
    let storage = {}
     return {
       user: 'bob',
       clear: function() {
         return this.user = ''
       },
       getItem: function(key) {
         return key in storage ? storage[key] : null;
       },
     }
   }

   window.localStorage = storageMock()
    const mockStore = configureMockStore()({
      loginUser: {id: 1, email: 'dbull', password: 'ya'}
    })
    console.log(mockStore)
    const wrapper = mount(<Provider store={mockStore}><LoginContainer/></Provider>)
  })
})
