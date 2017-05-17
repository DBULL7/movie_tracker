const upcomingFilms = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.payload.results.map((val, index) => {
        let movieHolder = {}
        movieHolder.title = val.title
        movieHolder.vote_average = val.vote_average
        movieHolder.vote_count = val.vote_count
        movieHolder.poster_path = val.poster_path
        movieHolder.overview = val.overview
        movieHolder.id = val.id
        movieHolder.vote_average = val.vote_average
        return movieHolder
      })
    default:
      return state
    }
  }

export default upcomingFilms
