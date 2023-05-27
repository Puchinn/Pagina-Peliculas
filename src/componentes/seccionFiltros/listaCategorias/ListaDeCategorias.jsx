import { StyledLink } from '../styledLink/StyledLink'
import { StyledList } from './../styledList/StyledList'

export function ListaDeCategorias() {
  return (
    <StyledList titulo={'Categorias'}>
      <StyledLink to={'/peliculas/populares'}>Mas Populares</StyledLink>
      <StyledLink to={'/peliculas/en_vivo'}>En Vivo</StyledLink>
      <StyledLink to={'/peliculas/estrenos'}>Estrenos</StyledLink>
      <StyledLink to={'/peliculas/mas_valoradas'}>Mejor Valoradas</StyledLink>
    </StyledList>
  )
}
