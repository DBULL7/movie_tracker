import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';


import AppContainer from './AppContainer';
import App from './App';

const mockStore = configureMockStore() ({
  upcomingFilms: [],
  loginUser: {
    id: 1,
    email: 'tman2272@aol.com',
    password: 'password'
  },
  favoriteReducer: []
})

const setup = () => {
  const Container = mount(<Provider store={mockStore}><AppContainer /></Provider>)

  const Component = Container.find(App);

  return {
    Container,
    Component
  }
}

describe('AppContainer', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Component.props().items).toEqual({
      upcomingFilms: [],
      loginUser: {
        id: 1,
        email: 'tman2272@aol.com',
        password: 'password'
      },
      favoriteReducer: []
    })
  })
})
