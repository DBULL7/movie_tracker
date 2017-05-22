import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginContainer from './LoginContainer';
import Login from './Login';
import fetchMock from 'fetch-mock'


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
  loginUser: {id: 2, email: 'dbull', password: 'ya'}
})


describe('Login Component Tests', () => {
  it('it should mount without crashing', () => {

    const wrapper = mount(<Provider store={mockStore}><LoginContainer history={'http://localhost:3000/'}/></Provider>)
  })

  it('should have empty strings for states', () => {
    const wrapper = mount(<Provider store={mockStore}><LoginContainer history={'http://localhost:3000/'}/></Provider>)
    const test = wrapper.find(Login)

    expect(test.node.state.email).toEqual('')
  })
})
