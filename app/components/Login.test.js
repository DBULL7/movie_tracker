import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginContainer from './LoginContainer';
import Login from './Login';
import fetchMock from 'fetch-mock'



const data = {data: {
  email: "tman2272@aol.com",
  id: 1,
  name: "taylor",
  password: "password"
}}

fetchMock.post('http://localhost:3000/api/users', {

  // headers: {"Content-Type": "application/json"},
  body: data
  // response: {
  //   email: "tman2272@aol.com",
  //   id: 1,
  //   name: "taylor",
  //   password: "password"
  // }
})

// fetchMock.get('http://localhost:3000/api/users', {
//   body: {
//     "email": "tman2272@aol.com",
//     "id": "1",
//     "name": "taylor",
//     "password": "password"
//   }
// })

// fetchMock.get('/api/users', {
//   // method: "POST",
//   // headers: {"Content-Type": "application/json"},
//   body: {
//     email: "tman2272@aol.com",
//     id: 1,
//     name: "taylor",
//     password: "password"
//   }
// })



const storageMock = () => {
  // let MovieTracker = {MovieTracker: {
  //   email: "tman2272@aol.com",
  //   id: 1,
  //   password: "password"}}
// let storage = MovieTracker
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

const mockStore = configureMockStore()({
  loginUser: {}
})


describe('Login Component Tests', () => {
  it('it should mount without crashing', () => {

    const wrapper = mount(<Provider store={mockStore}><LoginContainer history={'http://localhost:3000/'}/></Provider>)
  })

  it('should have empty strings for states', () => {
    const wrapper = mount(<Provider store={mockStore}><LoginContainer history={'http://localhost:3000/'}/></Provider>)
    const test = wrapper.find(Login)

    expect(test.node.state.email).toEqual('')
    expect(test.node.state.password).toEqual('')
  })

  it('should take user input',  async () => {
    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    }

    const wrapper = mount(<Provider store={mockStore}><LoginContainer history={'http://localhost:3000/'}/></Provider>)
    const login = wrapper.find(Login)
    const email = wrapper.find('.email')
    const password = wrapper.find('.password')
    const loginButton = wrapper.find('#login-button')
    // const mockFn =
    // console.log(email)
    email.simulate('change', { target: { value: 'tman2272@aol.com'}})
    password.simulate('change', { target: { value: 'password'}})
    expect(login.node.state.email).toEqual('tman2272@aol.com')
    expect(login.node.state.password).toEqual('password')
    loginButton.simulate('click')
    await resolveAfter2Seconds()

    expect(login.node.state.failed).toEqual(false)
    // expect(window.localStorage.Storage).toEqual({"id": 1, "email": "dbull", "password": "ya"})
    // console.log(localStorage.setItem('MovieTracker', JSON.stringify({id: 2, email: 'dbull', password: 'ya'})))
    expect(fetchMock.called()).toEqual(true)

    // expect(login.node.state.password).toEqual('')
  })
})
