const getUsers = () => {
  let p1 = apiCall('api/users')

  return Promise.all([p1]).then(userArray => {
    console.log(userArray)
    return userArray
  })
}

const apiCall = (address) => {
  return fetch(address).then(response => response.json())
  .catch(error => {return error})
}

export default getUsers
