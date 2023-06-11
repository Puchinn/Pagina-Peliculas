export function FondoDetalles({ img }) {
  return (
    <div
      className='absolute inset-0 bg-cover bg-center bg-no-repeat min-h-screen'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-90'></div>
    </div>
  )
}
