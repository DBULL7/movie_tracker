const upcomingFilms = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'GET_MOVIES':
      return action.movies
    default:
      return state
    }
  }

export default upcomingFilms
