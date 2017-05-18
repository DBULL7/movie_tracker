import React from 'react'

export const Favorites = (props) => {
  console.log(props);
  if (props.loginUser.id) {
    let id = props.loginUser.id
    fetch(`api/users/${id}/favorites`)
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <h2 className="favorites-title">Favorites</h2>
  )
}
