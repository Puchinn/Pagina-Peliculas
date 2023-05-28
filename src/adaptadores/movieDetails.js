export function movideDetails({ obj }) {
  return {
    id: obj.id,
    titulo: obj.title,
    posterImg: 'https://image.tmdb.org/t/p/w500' + obj.poster_path,
    fondoImg: 'https://image.tmdb.org/t/p/original' + obj.backdrop_path,
    descripcion: obj.overview,
    generos: obj.genres,
    subTitulo: obj.tagline,
    lanzamiento: obj.release_date,
    popularidad: obj.popularity,
    calificacion: obj.vote_average,
  }
}