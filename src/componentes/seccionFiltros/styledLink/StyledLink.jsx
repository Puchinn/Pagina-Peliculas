import { Link } from 'react-router-dom'

export function StyledLink({ children, to }) {
  return (
    <Link
      to={to}
      className='flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
    >
      <span className='text-base font-medium'> {children} </span>
    </Link>
  )
}
