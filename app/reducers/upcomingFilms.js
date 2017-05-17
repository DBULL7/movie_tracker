const upcomingFilms = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.payload.results
    default:
      return state
  }
}

export default upcomingFilms
