export function FondoDetalles({ img }) {
  return (
    <div
      className='absolute inset-0 bg-cover bg-center bg-no-repeat min-h-screen'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-black'></div>
    </div>
  )
}
