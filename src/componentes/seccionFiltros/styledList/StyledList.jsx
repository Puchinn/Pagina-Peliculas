export function StyledList({ children, titulo, open = true }) {
  return (
    <div className='my-3'>
      <details
        open={open}
        className='group [&_summary::-webkit-details-marker]:hidden'
      >
        <summary className='flex cursor-pointer items-center justify-between rounded-md px-4 py-2 bg-base-200 hover:bg-gray-100 hover:text-gray-700'>
          <div className='flex items-center gap-2'>
            <h2 className='text-xl font-bold'>{titulo}:</h2>
          </div>
          <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </summary>
        <nav className='mt-2 flex flex-col px-2'>{children}</nav>
      </details>
    </div>
  )
}
