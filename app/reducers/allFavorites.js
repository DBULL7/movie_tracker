const allFavorites = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FAVORITES':
      return action.allFavorites
    case 'TOGGLE_FAVORITE':
      let removal = []
      state.forEach((val, index) => {
        if(val.title !== action.film.title) {
          removal[removal.length] = val
        }
      })
      if(state.length < 1) {
        let blankSlate = action.film
        return [blankSlate]
      } else if(removal.length < state.length) {
        return removal
      } else {
        let tempState = state
        tempState[tempState.length] = action.film
        return tempState
      }
    case 'RESET_FAVORITES':
      return []
    default:
      return state
    }
  }

export default allFavorites
