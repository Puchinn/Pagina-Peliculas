import { Svg } from './Svg'

export function ToggleMenu({ value, setValue }) {
  return (
    <>
      <label className='lg:hidden btn btn-circle swap swap-rotate'>
        <input
          onChange={() => setValue(!value)}
          type='checkbox'
          value={value}
        />
        <Svg />
      </label>
    </>
  )
}
