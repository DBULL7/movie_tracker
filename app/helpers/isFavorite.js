const isFavorite = (filmTitle, favsArray) => {
  let isFav = 0;
  favsArray.forEach(val => {
    if(val.title === filmTitle) {
      isFav++
    }
  })
  return isFav === 0 ? 'favorite' : 'favorite favorite-selected'
}

export { isFavorite }
