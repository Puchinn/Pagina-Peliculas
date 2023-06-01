export function peliculasMapeadas({ originalMovies }) {
  return originalMovies?.map(movie => ({
    id: movie.id,
    titulo: movie.title,
    posterImg: 'https://image.tmdb.org/t/p/w400' + movie.poster_path,
  }))
} 