export function StyledList({ children, titulo }) {
  return (
    <div className='dropdown'>
      <label tabIndex={0} className='btn btn-outline'>
        <h2>{titulo}</h2>
      </label>
      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black/95'
      >
        {children}
      </ul>
    </div>
  )
}