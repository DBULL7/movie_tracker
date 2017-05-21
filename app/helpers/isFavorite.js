const isFavorite = (filmTitle, type, favsArray) => {
  let isFav = 0;
  favsArray.forEach(val => {
    if(val.title === filmTitle) {
      isFav++
    }
  })
  if(type === 'card') {
    return isFav === 0 ? 'movie' : 'movie movie-selected'
  }
  else if (type === 'button') {
    return isFav === 0 ? 'favorite' : 'favorite favorite-selected'
  }
}

export { isFavorite, }
