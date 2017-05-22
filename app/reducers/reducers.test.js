import allFavorites from './allFavorites'
import loginUser from './loginUser'
import upcomingFilms from './upcomingFilms'

describe('reducers testing', () => {
  const testFilms = [{id: 373569,
                  isFav: [],
                  overview: "When the coffee maker breaks down three wacky friends embark on the journey of a lifetime.",
                  poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                  release_date: "2017-05-11",
                  title: "Mocha",
                  vote_average: 4,
                  vote_count:22,
               },
                  {id: 373269,
                  isFav: [],
                  overview: "When their favorite band is playing in the big city three wacky friends embark on the journey of a lifetime.",
                  poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                  release_date: "2017-05-22",
                  title: "Tested",
                  vote_average: 2,
                  vote_count:223
               },
                  {id: 373469,
                   isFav: [],
                   overview: "When a routine drive to work goes hilariously awry three wacky friends embark on the journey of a lifetime.",
                   poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                   release_date: "2017-05-11",
                   title: "Vroom Vroom",
                   vote_average: 4,
                   vote_count:22,
               }]

  const favorite1 = {id: 373569,
                    isFav: [],
                    overview: "When the coffee maker breaks down three wacky friends embark on the journey of a lifetime.",
                    poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                    release_date: "2017-05-11",
                    title: "Mocha",
                    vote_average: 4,
                    vote_count:22,
                    }

  const favorite2 = {id: 373269,
                    isFav: [],
                    overview: "When something happens blah blah blah three wacky friends embark on the journey of a lifetime.",
                    poster_path: "/lvGa6v7sR6p6RWCtwv0Dgdr1B8z.jpg",
                    release_date: "2017-05-22",
                    title: "Squeedle Deedle Dee",
                    vote_average: 2,
                    vote_count:223
                    }

  const user = {id: 1,
                email: 'bigT@whitehouse.gov',
                password: 'password'}


  it('upcomingFilms reducer returns movies', () => {
    const upcoming = upcomingFilms(testFilms, 'GET_MOVIES')
    expect(upcoming).toEqual(testFilms)
  })

  it('loginUser should return login information', () => {
    const logged = loginUser([], {type: 'LOGIN_USER', loginUser: user})
    expect(logged).toEqual(user)
  })

  it('allFavorites should remove films if they already exist in favorites', () => {
    expect(testFilms.length).toEqual(3)
    const favs = allFavorites(testFilms, {type: 'TOGGLE_FAVORITE',
                                          film: favorite1})

    expect(favs.length).toEqual(2)
  })

  it('allFavorites should add films if they dont exist in favorites', () => {
    expect(testFilms.length).toEqual(3)
    const favs = allFavorites(testFilms, {type: 'TOGGLE_FAVORITE',
                                          film: favorite2})

    expect(favs.length).toEqual(4)
  })

  it('allFavorites should remove all favorites when logging out', () => {
    expect(testFilms.length).toEqual(4)
    const favs = allFavorites(testFilms, {type: 'RESET_FAVORITES',
                                          film: {} })

    expect(favs).toEqual([])
  })
})
