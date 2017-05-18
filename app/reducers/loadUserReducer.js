const loadUser = (state = [], action) => {
  console.log('loadUser', action.user);
  switch (action.type) {
    case 'USER_LOADED':
    console.log('switch in loadUser');
      return action.user
    default:
      return state
    }
  }

export default loadUser
