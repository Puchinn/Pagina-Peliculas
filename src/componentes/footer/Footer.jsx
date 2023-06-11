export function Footer() {
  return (
    <footer className='pt-28 pb-8 bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white'>
      <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
        <h2 className='text-3xl font-bold text-center lg:text-left'>
          Pagina de Peliculas
        </h2>
        <div className='lg:flex lg:items-end lg:justify-between'>
          <div>
            <p className='mx-auto font-semibold mt-4 max-w-md text-center leading-relaxed text-gray-500 lg:text-left'>
              Este proyecto fue realizado utilizando React, Tailwind CSS y
              DaisyUI. La información de las películas se obtiene de la API{' '}
              <a
                className='link text-white'
                target='_blank'
                href='https://developer.themoviedb.org/docs'
                rel='noreferrer'
              >
                The Movie Database.
              </a>
            </p>
          </div>

          <nav aria-label='Footer Nav' className='mt-12 lg:mt-0'>
            <ul className='flex font-black text-white/70 flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12 [&_li_a:hover]:text-rose-700'>
              <li>
                <a
                  target='_blank'
                  href='https://github.com/Puchinn/Pagina-Peliculas'
                  rel='noreferrer'
                >
                  Repositorio
                </a>
              </li>

              <li>
                <a
                  target='_blank'
                  href='https://github.com/Puchinn'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/esteban-sayago/'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  target='_blank'
                  href='https://estebansayago.vercel.app'
                  rel='noreferrer'
                >
                  Mi Portafolio
                </a>
              </li>

              <li>
                <a
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
