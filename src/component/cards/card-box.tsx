import { $ } from '@'
import lcss from './card-box.module.css'

export interface TCardBoxProp {
  'url-img': string
  label: string
  info: string | number
}

export const CardBox = ({ 'url-img': urlImg, label, info }: TCardBoxProp) => {
  return (
    <section
      aria-label="card box"
      className={$.clcs([
        'inline-grid gap-x-4 rounded-lg border p-4 shadow-lg',
        lcss?.['grid-2x2'],
      ])}
    >
      <img
        alt="card-img"
        aria-label="image"
        src={urlImg}
        className="row-span-2 w-fit rounded-lg"
      />
      <span>{label}</span>
      <span>{info}</span>
    </section>
  )
}

export default CardBox
