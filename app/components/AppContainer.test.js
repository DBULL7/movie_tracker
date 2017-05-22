import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AppContainer from './AppContainer';
import App from './App';
import rootReducer from '../reducers/rootReducer';
import fetchMock from 'fetch-mock';
import { Route, Link, NavLink, MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';


describe('AppContainer', () => {

  const mockStore = configureMockStore() ({
    upcomingFilms: [{id: 373569,
                    isFav: [],
                    overview: "When the coffee maker breaks down three wacky friends embark on the journey of a lifetime.",
                    poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                    release_date: "2017-05-11",
                    title: "Mocha",
                    vote_average: 4,
                    vote_count:22,
                  }, {id: 373269,
                    isFav: [],
                    overview: "When Enzyme testing gets assigned in class three wacky friends embark on the journey of a lifetime.",
                    poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                    release_date: "2017-05-22",
                    title: "Tested",
                    vote_average: 2,
                    vote_count:223}],
    loginUser: {
                    id: 1,
                    email: 'bigdaddyT@whitehouse.gov',
                    password: 'password'
                  },
    allFavorites: [{id: 373569,
                    isFav: [],
                    overview: "When the coffee maker breaks down three wacky friends embark on the journey of a lifetime.",
                    poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                    release_date: "2017-05-11",
                    title: "Mocha",
                    vote_average: 4,
                    vote_count:22,
                  }]
  })

  const setup = () => {
    const Container = mount(<Provider store={mockStore}><AppContainer /></Provider>)
    const Component = Container.find(Home);

    return {
      Container,
      Component
    }
  }

  const { Container, Component } = setup();

  it('should pass the appropriate props from state', () => {
    expect(Component.props().items).toEqual({
      upcomingFilms: [],
      loginUser: {
        id: 1,
        email: 'tman2272@aol.com',
        password: 'password'
      },
      allFavorites: []
    })
  })


  it('should mount without crashing', () => {
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
    const wrapper = mount(<Provider store={mockStore}>
      <MemoryRouter>
        <AppContainer />
      </MemoryRouter>
    </Provider>)
    const test = wrapper.find('CreateAccountContainer')

    expect(test.length).toEqual(1)
  })
})
