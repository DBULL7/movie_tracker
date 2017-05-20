export const checkLocalStorage = () => {
  return (localStorage.getItem('MovieTracker'))
}

export const autoLogin = (input) => {
  if (input) {
    let data = JSON.parse(input)
    return data
  }
}


// const { email, password, id } = data
// if (email) {
//   fetch('/api/users', {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({email: email, password: password})
//   }).then((results) => results.json())
//   .then((data) => {
//     console.log(data);
//   })
// }


// Redux({id: data.data.id, email: data.data.email, name: data.data.name})
// localStorage.setItem('MovieTracker', JSON.stringify({email: this.state.email, password: this.state.password}))
// let test = JSON.parse(localStorage.getItem('MovieTracker'))
// console.log(test.email)
// this.props.history.replace(`/loggedIn`)
