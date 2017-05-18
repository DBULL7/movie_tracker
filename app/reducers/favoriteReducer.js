const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      console.log('add favorite');
      return action.favorites
    default:
      return state
    }
  }

export default favoriteReducer
