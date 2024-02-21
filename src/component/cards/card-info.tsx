import lcss from './card-info.module.css'
import { $ } from '@'

export interface TCardInfoProp {
  'url-img': string
  label: string
  info: string | number
}

export const CardInfo = ({ 'url-img': urlImg, label, info }: TCardInfoProp) => {
  return (
    <section
      aria-label="card info"
      className="inline-grid auto-rows-min grid-cols-2 grid-rows-3 place-items-center rounded-lg border p-4 px-8 shadow-lg"
    >
      <span>{info}</span>
      <img
        alt="card-img"
        aria-label="image"
        src={urlImg}
        className="row-span-2 rounded-lg"
      />
      <span>{label}</span>
      <div className="col-span-full">
        <button
          className={$.clcs([
            "border hover:after:content-['_>>']",
            lcss?.['animation'],
          ])}
        >
          More Info
        </button>
      </div>
    </section>
  )
}

export default CardInfo
