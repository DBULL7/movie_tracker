const getNewFilms = () => {
  let p1 = apiCall('https://api.themoviedb.org/3/movie/now_playing?api_key=943e4f5ccf1cdbbcab342f134a46713a&language=en-US&page=1')

  return Promise.all([p1]).then(filmArray => {
    return filmArray[0].results.map((val, index) => {
      let movieHolder = {}
      movieHolder.title = val.title
      movieHolder.vote_average = val.vote_average
      movieHolder.vote_count = val.vote_count
      movieHolder.poster_path = val.poster_path
      movieHolder.overview = val.overview
      return movieHolder
    })
  })
}

const apiCall = (address) => {
  return fetch(address).then(response => response.json())
}


export default getNewFilms
