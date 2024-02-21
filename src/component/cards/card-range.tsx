import lcss from './card-range.module.css'
import { $ } from '@'

export interface TCardRangeProp {
  'url-img': string
  label: string
  value: number
  'max-value': number
}

export const CardRange = ({
  'url-img': urlImg,
  label,
  value,
  'max-value': max,
}: TCardRangeProp) => {
  return (
    <section
      aria-label="card box"
      className={$.clcs([
        'inline-grid items-center gap-x-4 rounded-lg border p-4 shadow-lg',
        lcss?.['grid-3x2'],
      ])}
    >
      <img
        alt="card-img"
        aria-label="image"
        src={urlImg}
        className="row-span-3 w-fit rounded-full"
      />
      <span>{label}</span>
      <meter
        aria-valuenow={value}
        aria-valuemax={max}
        className="w-auto"
        {...{ value, max }}
      >
        {' '}
        {value}
      </meter>
      <p>
        Monto actual: {value} de {max}
      </p>
    </section>
  )
}

export default CardRange
