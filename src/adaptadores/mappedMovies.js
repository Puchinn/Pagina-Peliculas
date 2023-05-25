export function peliculasMapeadas({ originalMovies }) {
  return originalMovies?.map(movie => ({
    id: movie.id,
    titulo: movie.title,
    descripcion: movie.overview,
    posterImg: 'https://image.tmdb.org/t/p/w400' + movie.poster_path,
    fondoImg: 'https://image.tmdb.org/t/p/original' + movie.backdrop_path,
    generos: movie.genre_ids
  }))
} 