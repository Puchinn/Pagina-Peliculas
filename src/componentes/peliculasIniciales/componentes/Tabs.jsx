export function Tabs({ palabraActiva, updateFunction }) {
  const isDayClass = palabraActiva === 'day' && 'tab-active'
  const isWeekClass = palabraActiva === 'week' && 'tab-active'

  return (
    <div className='tabs '>
      <button
        className={`tab tab-lg tab-lifted ${isDayClass}`}
        onClick={updateFunction}
        value={'day'}
      >
        Del Dia
      </button>
      <button
        className={`tab tab-lg tab-lifted ${isWeekClass}`}
        onClick={updateFunction}
        value={'week'}
      >
        De La Semana
      </button>
    </div>
  )
}
