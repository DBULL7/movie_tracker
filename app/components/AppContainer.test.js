import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AppContainer from './AppContainer';
import App from './App';
import rootReducer from '../reducers/rootReducer'
import fetchMock from 'fetch-mock';


describe('AppContainer', () => {

  // const { Container, Component } = setup();

  // it.skip('should pass the appropriate props from state', () => {
  //   expect(Component.props().items).toEqual({
  //     upcomingFilms: [],
  //     loginUser: {
  //       id: 1,
  //       email: 'tman2272@aol.com',
  //       password: 'password'
  //     },
  //     allFavorites: []
  //   })
  // })


  it('should mount without crashing', () => {
  //   const mockStore = configureMockStore()({})
  //   const storageMock = () => {
  //   let storage = {}
  //    return {
  //      user: 'bob',
  //      clear: function() {
  //        return this.user = ''
  //      },
  //      getItem: function(key) {
  //        return key in storage ? storage[key] : null;
  //      },
  //    }
  //  }
   //
  //  window.localStorage = storageMock()
  //   const wrapper = shallow(<Provider store={mockStore}><AppContainer/></Provider>)
    // const test = wrapper.find('.movie-tracker')
    //
    // expect(test.length).toEqual(1)
  })

})
