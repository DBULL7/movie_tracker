import allFavorites from '../reducers/allFavorites'

describe('Favorites', () => {
  it('should add a favorite when clicked', () => {
    const action  = {type: 'TOGGLE_FAVORITE', selectedMovie: {
      id: 283995,
      overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      release_date: "2017-04-24",
      title: "Guardians of the Galaxy Vol. 2",
      vote_average: 7.6,
      vote_count: 1618
    }
  }

    expect(allFavorites(undefined, action).length).toEqual(1);
  })

  it('should clear favorites on logout', () => {
    const action = {type: 'RESET_FAVORITES', allFavorites: []}

    expect(allFavorites(undefined, action).length).toEqual(0);
  })
})
