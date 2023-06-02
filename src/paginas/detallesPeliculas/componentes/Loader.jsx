import { Waveform } from '@uiball/loaders'

export function Loader() {
  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center relative z-30 bg-black'>
      <Waveform size={40} lineWeight={3.5} speed={1} color='white' />
    </div>
  )
}
