export function FondoDetalles({ img }) {
  return (
    <div
      className='absolute inset-0 bg-center bg-cover min-h-screen'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-90'></div>
    </div>
  )
}
