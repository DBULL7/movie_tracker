import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import { browserHistory } from 'react-router-dom'

import HomeContainer from './HomeContainer';
import Home from './Home';

describe('HomeContainer', () => {
  const mockFn = jest.fn()
  const displayMovie = mockFn()
  const getFav = mockFn()
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
    const Container = mount(<Provider store={mockStore}><HomeContainer /></Provider>)
    const Component = Container.find(Home);

    return {
      Container,
      Component
    }
  }

  const { Container, Component } = setup();

  it('HomeContainer renders number of movie cards equal to length of films array', () => {
    const movieCard = Container.find('Movie')

    expect(movieCard.length).toEqual(2)
    })

  it('HomeContainer passes down all information pertinent to the film', () => {
    expect(Object.keys(Component.props().upcomingFilms[0])).toContain('title');
    expect(Object.keys(Component.props().upcomingFilms[0])).toContain('id');
    expect(Object.keys(Component.props().upcomingFilms[0])).toContain('overview');
    expect(Object.keys(Component.props().upcomingFilms[0])).toContain('poster_path');
    expect(Object.keys(Component.props().upcomingFilms[0])).toContain('release_date');
    expect(Object.keys(Component.props().upcomingFilms[0])).toContain('vote_average');
    expect(Object.keys(Component.props().upcomingFilms[0])).toContain('vote_count');
  })

  
})
