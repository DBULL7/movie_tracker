export const getMovies = (movies) => {
  return {
    type: 'GET_MOVIES',
    movies
  }
}

export const upcomingFilms = ()  =>  {
  return {
    type: 'GET_MOVIES'
    console.log('fired upcoming film action');
  //  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=943e4f5ccf1cdbbcab342f134a46713a&language=en-US&page=1')
  //     .then(response => response.json())
  //     .then(movies => dispatch(getMovies(movies)))
  }
}
