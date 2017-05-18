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

// static getAllCats() {
//     return fetch('http://localhost:5000/api/v1/cats').then(response => {
//       return response.json();
//     }).catch(error => {
//       return error;
//     });
//   }
