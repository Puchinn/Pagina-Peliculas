export function movideDetails({ obj }) {
  return {
    id: obj.id,
    titulo: obj.title,
    posterImg: 'https://image.tmdb.org/t/p/w400' + obj.poster_path,
    fondoImg: 'https://image.tmdb.org/t/p/original' + obj.backdrop_path,
    descripcion: obj.overview
  }
}