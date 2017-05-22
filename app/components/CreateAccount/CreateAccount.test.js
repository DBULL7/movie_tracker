import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CreateAccount from './CreateAccount';
import CreateAccountContainer from './CreateAccountContainer';
import fetchMock from 'fetch-mock'

fetchMock.post('/api/users', {
  status: 500,

  body: createAccount
})

const createAccount = {name: "Jhun", email: 'yung@jhun.com', password: 'lit', id: 41}

 fetchMock.post("api/users/new", {
  body: createAccount
})

// afterEach( () => {
//   // expect(fetchMock.calls().unmatched).toEqual([]);
//   fetchMock.restore()
// })

const storageMock = () => {
let Storage = {}
 return {
   setItem: function(key, value) {
     return Storage[key] = value
   },
   clear: function() {
     return this.user = ''
   }
 }
}

window.localStorage = storageMock()

describe('Create Account Tests', () => {
  const mockStore = configureMockStore()({
    loginUser: {}
  })
  it('should mount without crashing', () => {
    const wrapper = mount(<Provider store={mockStore}><CreateAccountContainer/></Provider>)
  })

  it('should have state of empty strings', () => {
    const wrapper = mount(<Provider store={mockStore}><CreateAccountContainer/></Provider>)
    const state = wrapper.find(CreateAccount)
    expect(state.node.state.name).toEqual('')
    expect(state.node.state.email).toEqual('')
    expect(state.node.state.password).toEqual('')
    expect(state.node.state.retypedPassword).toEqual('')
    expect(state.node.state.emailTaken).toEqual(false)
  })

  it('should should create an account', () => {
    const wrapper = mount(<Provider store={mockStore}><CreateAccountContainer history={'http://localhost:3000/'}/></Provider>)
    const state = wrapper.find(CreateAccount)

    const name = wrapper.find('.name')
    const email = wrapper.find('.email')
    const password = wrapper.find('.password')
    const retypedPassword = wrapper.find('.retypedPassword')
    const button = wrapper.find('#create-account-button')
    name.simulate('change', { target: { value: 'Jhun'}})
    email.simulate('change', { target: { value: 'yung@jhun.com'}})
    password.simulate('change', { target: { value: 'lit'}})
    retypedPassword.simulate('change', { target: { value: 'lit'}})
    expect(state.node.state.name).toEqual('Jhun')
    expect(state.node.state.password).toEqual('lit')
    button.simulate('click')
    expect(state.node.state.emailTaken).toEqual(false)
  })

  it('should prevent bad data from being submitted', () => {
    const wrapper = mount(<Provider store={mockStore}><CreateAccountContainer history={'http://localhost:3000/'}/></Provider>)
    const state = wrapper.find(CreateAccount)

    const name = wrapper.find('.name')
    const email = wrapper.find('.email')
    const password = wrapper.find('.password')
    const retypedPassword = wrapper.find('.retypedPassword')
    const button = wrapper.find('#create-account-button')
    name.simulate('change', { target: { value: 'Jhun'}})
    email.simulate('change', { target: { value: 'yungjhun'}})
    password.simulate('change', { target: { value: 'lit'}})
    retypedPassword.simulate('change', { target: { value: 'lit'}})
    expect(state.node.state.name).toEqual('Jhun')
    expect(state.node.state.password).toEqual('lit')
    button.simulate('click')
    // expect(fetchMock.called()).toEqual(false)
    email.simulate('change', { target: { value: 'yung@jhun.com'}})
    button.simulate('click')
    expect(fetchMock.called()).toEqual(true)
  })

})
