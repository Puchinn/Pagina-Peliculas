import { Waveform } from '@uiball/loaders'

export function Loading() {
  return (
    <div className='w-full flex bg-white bg-opacity-10 justify-center items-center h-screen absolute'>
      <Waveform size={40} lineWeight={3.5} speed={1} color='white' />
    </div>
  )
}
