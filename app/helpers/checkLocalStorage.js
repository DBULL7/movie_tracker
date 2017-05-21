export const checkLocalStorage = () => {
  return (localStorage.getItem('MovieTracker'))
}

export const autoLogin = (input) => {
  if (input) {
    let data = JSON.parse(input)
    return data
  }
}
