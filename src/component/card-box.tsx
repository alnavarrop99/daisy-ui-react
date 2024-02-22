import { $ } from '@'
import lcss from './card-box.module.css'
import React, { createContext, useContext, useMemo } from 'react'
import { borderRadius } from 'tailwindcss/defaultTheme'

/* eslint-disable-next-line */
export interface TCardBoxProp {
  'url-img': string
  label: string
  info: string | number
}

const _favorite = createContext<
  { value: boolean; position: 'right' | 'left' } | undefined
>(undefined)

/* eslint-disable-next-line */
export const CardBox = ({
  children,
  favorite,
  ...props
}: React.PropsWithChildren<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDetailsElement>,
    HTMLDetailsElement
  > & { favorite?: boolean | { value: boolean; position: 'right' | 'left' } }
>) => {
  const style = useMemo(() => {
    const child = React.Children.count(children)
    return { gridTemplateRows: `repeat(${child - 1}, minmax(0, 1fr))` }
  }, [children])

  return (
    <_favorite.Provider
      value={
        typeof favorite === 'boolean'
          ? { value: favorite, position: 'left' }
          : favorite
      }
    >
      <section
        {...props}
        style={style}
        aria-label="card container"
        className={$.clcs([
          'inline-grid grid-flow-col gap-x-4 rounded-lg border p-4 shadow-lg',
          lcss?.['grid-fx2'],
          props?.className ?? '',
        ])}
      >
        {children}
      </section>
    </_favorite.Provider>
  )
}

/* eslint-disable-next-line */
CardBox.Img = function ({
  size,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & { size?: keyof typeof borderRadius }) {
  const favorite = useContext<
    { value: boolean; position: 'right' | 'left' } | undefined | undefined
  >(_favorite)
  return (
    <div
      aria-label="card image"
      className={$.clcs([
        'h-initial  row-span-full',
        $.clco({
          'rounded-lg': size === 'lg' || typeof size === 'undefined',
          'rounded-sm': size === 'sm',
          'rounded-md': size === 'md',
          'rounded-xl': size === 'xl',
          'rounded-2xl': size === '2xl',
          'rounded-3xl': size === '3xl',
          'rounded-none': size === 'none',
          'rounded-full': size === 'full',
        }),
      ])}
    >
      {favorite && favorite.value && favorite.position === 'left' && (
        <span
          className={$.clcs([
            'absolute inline-block h-4 w-4 origin-bottom-right -translate-x-1/3 -translate-y-1/3 rounded-full bg-green-500',
          ])}
        ></span>
      )}
      <img
        {...props}
        className={$.clcs([
          'rounded-inherit inline-block min-h-full',
          props?.className ?? '',
        ])}
        alt="card-img"
      />
      {favorite && favorite.value && favorite.position === 'right' && (
        <span
          className={$.clcs([
            'absolute inline-block h-4 w-4 origin-bottom-right -translate-x-2/3 -translate-y-1/3 rounded-full bg-green-500',
          ])}
        ></span>
      )}
    </div>
  )
}

/* eslint-disable-next-line */
CardBox.Label = function ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>) {
  return (
    <span {...props} aria-label="card title">
      {children}
    </span>
  )
}

/* eslint-disable-next-line */
CardBox.Info = function ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>) {
  return (
    <span {...props} aria-label="card information">
      {children}
    </span>
  )
}

/* eslint-disable-next-line */
CardBox.Range = function ({
  children,
  ...props
}: React.PropsWithChildren<
  React.DetailedHTMLProps<
    React.MeterHTMLAttributes<HTMLMeterElement>,
    HTMLMeterElement
  >
>) {
  return (
    <div
      aria-label="card range"
      className={$.clcs(['grid-rows-subgrid grid', props?.className ?? ''])}
    >
      <meter
        {...props}
        className={$.clcs(['w-auto'])}
        value={props?.value}
        max={props?.max}
        aria-valuemax={props?.max as number}
        aria-valuemin={0}
        aria-valuenow={props?.value as number}
      ></meter>
      {typeof children === 'undefined' && props?.value && props?.max ? (
        <p>
          Monto actual: {props?.value} de {props?.max}.
        </p>
      ) : (
        <p>{children}</p>
      )}
    </div>
  )
}

/* eslint-disable-next-line */
CardBox.Button = function ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...props}
      className={$.clcs([
        "border hover:after:content-['_>>']",
        lcss?.['animation'],
        props?.className ?? '',
      ])}
    >
      {children ?? 'More Info'}
    </button>
  )
}

export default CardBox
