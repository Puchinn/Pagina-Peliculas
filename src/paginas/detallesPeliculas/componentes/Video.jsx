import { useState } from 'react'

export function Video({ idKey }) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <button onClick={() => setIsVisible(true)} className='btn'>
        Ver Trailer
      </button>

      {isVisible && (
        <div className='fixed lg:mt-[90px] mx-auto z-[110] inset-0'>
          <div className='modal-box min-h-[600px] mx-auto max-w-4xl w-full flex justify-center flex-col items-center'>
            <iframe
              className='w-full min-h-[520px]'
              src={'https://www.youtube-nocookie.com/embed/' + idKey}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
            <div className='modal-action'>
              <button
                onClick={() => setIsVisible(false)}
                htmlFor='my_modal_6'
                className='btn'
              >
                Close!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
