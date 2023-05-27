import { StyledList } from '../styledList/StyledList'
import { StyledLink } from '../styledLink/StyledLink'

export function ListaTendencias() {
  return (
    <StyledList titulo={'Tendencias'}>
      <StyledLink to={'/peliculas/tendencias/del_dia'}>Del Dia</StyledLink>
      <StyledLink to={'/peliculas/tendencias/de_la_semana'}>
        De La Semana
      </StyledLink>
    </StyledList>
  )
}
