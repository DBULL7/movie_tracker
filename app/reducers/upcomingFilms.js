const upcomingFilms = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      console.log("SOMETHING WORK", state);
      return [...state]
    default:
      return state
  }
}

export default upcomingFilms
