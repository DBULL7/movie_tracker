const allFavorites = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FAVORITES':
    console.log('loading favorites');
      return action.allFavorites
    default:
      return state
    }
  }

export default allFavorites
