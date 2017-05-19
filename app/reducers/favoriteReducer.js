const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
    console.log('WAAAAAH', action.film);
      if(!state.length) {
        return action.film
      } else {
        return Object.assign([], state, action.film)
      }
    default:
      return state
    }
  }

export default favoriteReducer
