const loginUser = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      console.log(action);
      return action.loginUser
    default:
      return state
    }
  }

export default loginUser
