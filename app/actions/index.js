// export const getMovies = (movies) => {
//   return {
//     type: 'GET_MOVIES',
//     movies
//   }
// }

const upcomingFilms = (payload)  =>  {
  return {
    type: 'GET_MOVIES',
    payload
  }
}

export default upcomingFilms
