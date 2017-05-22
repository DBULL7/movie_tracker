import * as actions from './index';

describe('Actions', () => {
  it('should get movies', () => {
    const movies = [{
      id: 283995,
      overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      release_date: "2017-04-24",
      title: "Guardians of the Galaxy Vol. 2",
      vote_average: 7.6,
      vote_count: 1618
    }]

    const action = actions.upcomingFilms(movies);

    const returnedObject = {
      type: 'GET_MOVIES',
      movies
    }

    expect(action).toEqual(returnedObject)
  })

  it('should create account', () => {
    const loginUser = {
      id: 1,
      email: "tman2272@aol.com",
      password: "password"
    }

    const action = actions.loginUser(loginUser)

    const returnedObject = {
      type: 'LOGIN_USER',
      loginUser
    }

    expect(action).toEqual(returnedObject)
  })

  it('should toggle favorites', () => {
    const film = [{
      id: 283995,
      overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      release_date: "2017-04-24",
      title: "Guardians of the Galaxy Vol. 2",
      vote_average: 7.6,
      vote_count: 1618
    }]

    const action = actions.toggleFavorite(film)

    const returnedObject = {
      type: 'TOGGLE_FAVORITE',
      film
    }


    expect(action).toEqual(returnedObject)
  })

  it('should get user favorites', () => {
    const allFavorites = [{
      id: 283995,
      overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      release_date: "2017-04-24",
      title: "Guardians of the Galaxy Vol. 2",
      vote_average: 7.6,
      vote_count: 1618
    }]

    const action = actions.getUserFavorites(allFavorites);

    const returnedObject = {
      type: 'LOAD_FAVORITES',
      allFavorites
    }

    expect(action).toEqual(returnedObject)
  })
})
