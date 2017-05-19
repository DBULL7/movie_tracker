const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      console.log("STATE", state);
      if(state.length < 1) {
        let blankSlate = action.film
        return [blankSlate]
      } else {
        let tempState = state
        tempState[tempState.length] = action.film
        console.log('tempState', tempState);
        return tempState
      }
    default:
      return state
    }
  }

export default favoriteReducer
