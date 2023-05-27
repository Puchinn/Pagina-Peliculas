import { StyledList } from '../styledList/StyledList'
import { StyledLink } from '../styledLink/StyledLink'
import { useGeneros } from './../../../hooks/useGeneros'

export function ListaDeGeneros() {
  const { generos } = useGeneros()

  return (
    <StyledList titulo={'Generos'} open={false}>
      {generos?.map((gen) => (
        <StyledLink key={gen.id} to={`/peliculas/generos/${gen.id}`}>
          {gen.name}
        </StyledLink>
      ))}
    </StyledList>
  )
}
