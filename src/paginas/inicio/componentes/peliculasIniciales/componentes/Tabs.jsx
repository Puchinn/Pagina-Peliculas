export function Tabs({ palabraActiva, updateFunction }) {
  const isDayClass = palabraActiva === 'day' && 'tab-active'
  const isWeekClass = palabraActiva === 'week' && 'tab-active'

  return (
    <div className='tabs bg-transparent'>
      <button
        className={`tab tab-bordered ${isDayClass}`}
        onClick={updateFunction}
        value={'day'}
      >
        Del Dia
      </button>
      <button
        className={`tab tab-bordered ${isWeekClass}`}
        onClick={updateFunction}
        value={'week'}
      >
        De La Semana
      </button>
    </div>
  )
}
