import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import { browserHistory } from 'react-router'

import { Movie } from './movieCard'

describe('individual movie cards', () => {

  const mockFn = jest.fn()

  const testFilm = {id: 373269,
                    isFav: [],
                    overview: "When Enzyme testing gets assigned in class three wacky friends embark on the journey of a lifetime.",
                    poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                    release_date: "2017-05-22",
                    title: "Tested",
                    vote_average: 2,
                    vote_count:223, }

  const { title, overview, release_date,
          vote_average, vote_count, poster_path, id} = testFilm

  it('should render a thing', () => {

    const wrapper = shallow(<Movie
                            {...testFilm}
                            />)
    expect(wrapper.length).toEqual(1)
  })

  it('should recieve and render sections for appropriate pieces of movie information', () => {

    const wrapper = shallow(<Movie
                            {...testFilm}
                            />)

    const title = wrapper.find('.movie-content-title')
    const releaseDate = wrapper.find('.movie-content-data').first()
    const voteCount = wrapper.find('.movie-content-data').last()

    expect(title.text()).toEqual('Tested')
    expect(releaseDate.text()).toEqual('2017-05-22')
    expect(voteCount.text()).toEqual('223')
  })

  it('should call popup for individual movie card on click', () => {
    const wrapper = shallow(<Movie
                            {...testFilm}
                            displayMovie={mockFn}
                            />)

    const display = wrapper.find('.movie-pop')
    display.simulate('click')
    expect(mockFn).toHaveBeenCalled()
  })

  it('should not include favorited css when not selected', () => {
    const favs = []

    const wrapper = shallow(<Movie
                            {...testFilm}
                            displayMovie={mockFn}
                            isFav={favs}
                            />)
      const favorited = wrapper.find('.favorite-selected')
      expect(favorited.length).toEqual(0)
    })

  it('should find and return appropriate css when favorited', () => {
    const favs = [{id: 373269,
                  isFav: [],
                  overview: "When Enzyme testing gets assigned in class three wacky friends embark on the journey of a lifetime.",
                  poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                  release_date: "2017-05-22",
                  title: "Tested",
                  vote_average: 2,
                  vote_count:223, }]

    const wrapper = shallow(<Movie
                            {...testFilm}
                            displayMovie={mockFn}
                            isFav={favs}
                            />)
    const favorited = wrapper.find('.favorite-selected')
    expect(favorited.length).toEqual(1)
  })

})
