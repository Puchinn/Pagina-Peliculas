import { useIdiomaContext } from "./useIdiomaContext"

export function useGeneros() {
  const { generos } = useIdiomaContext()

  return { generos }
}