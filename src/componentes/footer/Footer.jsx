export function Footer() {
  return (
    <footer className='bg-base-200'>
      <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
        <h2 className='text-3xl font-bold'>Pagina de Peliculas</h2>
        <div className='lg:flex lg:items-end lg:justify-between'>
          <div>
            <p className='mx-auto font-semibold mt-4 max-w-md text-center leading-relaxed text-gray-500 lg:text-left'>
              Este proyecto fue realizado utilizando React, Tailwind CSS y
              DaisyUI. La información de las películas se obtiene de la API{' '}
              <a
                className='link'
                target='_blank'
                to='https://developer.themoviedb.org/docs'
                rel='noreferrer'
              >
                The Movie Database.
              </a>
            </p>
          </div>

          <nav aria-label='Footer Nav' className='mt-12 lg:mt-0'>
            <ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12'>
              <li>
                <a
                  target='_blank'
                  className='font-black text-gray-500 transition hover:text-gray-500/75'
                  href='https://github.com/Puchinn/Pagina-Peliculas'
                  rel='noreferrer'
                >
                  Repositorio
                </a>
              </li>

              <li>
                <a
                  target='_blank'
                  className='font-black text-gray-500 transition hover:text-gray-500/75'
                  href='https://github.com/Puchinn'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  target='_blank'
                  className='text-gray-500 transition hover:text-gray-500/75 font-black'
                  href='https://www.linkedin.com/in/esteban-sayago/'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  target='_blank'
                  className='text-gray-500 transition hover:text-gray-500/75 font-black'
                  href='https://estebansayago.vercel.app'
                  rel='noreferrer'
                >
                  Mi Portafolio
                </a>
              </li>

              <li>
                <a
                  className='text-gray-500 transition hover:text-gray-500/75 font-black'
                  href='https://discordapp.com/users/392773520838492160'
                  target='_blank'
                  rel='noreferrer'
                >
                  Discord
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className='mt-12 text-center text-sm text-gray-500 lg:text-right'>
          Copyright &copy; 2023. Esteban Sayago.
        </p>
      </div>
    </footer>
  )
}
