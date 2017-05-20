const allFavorites = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FAVORITES':
    console.log('loading favorites');
      return action.allFavorites
    case 'TOGGLE_FAVORITE':
      let remove = []
      let good = []
      state.forEach((movie) => {
        if (action.film.title === movie.title) {
          remove.push(state.pop(movie))
        } else {
          good.push(movie)
        }
      })
      return good
    default:
      return state
    }
  }

export default allFavorites
