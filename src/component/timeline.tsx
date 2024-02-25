import { $ } from '@/helper'
import { Children, useMemo } from 'react'

/* eslint-disable-next-line */
export interface TTimeLine {
  items: ArrayLike<
    {
      start?: TTimeStart
      middle?: TTimeMiddle
      end?: TTimeEnd
      status?: 'info' | 'success' | 'warning' | 'error'
    } & React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  >
  status?: {
    value: 'info' | 'success' | 'warning' | 'error'
    start: number
    end?: number
  }
  direction?: 'vertical' | 'horizontal'
  side?: 'snap' | 'compact'
}

/* eslint-disable-next-line */
export function TimeLine({
  children,
  items: _items,
  status,
  direction = 'horizontal',
  side,
  ...props
}: React.PropsWithChildren<TTimeLine> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >) {
  const items = useMemo(() => Object.entries(_items), [_items])
  const _className = useMemo(
    () =>
      $.clcs([
        'timeline',
        $.clco({
          'timeline-vertical': direction === 'vertical',
          'timeline-horizontal': direction === 'horizontal',
          'timeline-compact': side === 'compact',
          'timeline-snap-icon': side === 'snap',
        }),
        props?.className,
      ]),
    [status, direction, side, children]
  )

  if (!children && !items?.length) return
  if (children) {
    return (
      <ul {...props} className={$.clcs([_className, 'inline-flex'])}>
        {Children.map(children, (item, i) => (
          <li key={i}> {item} </li>
        ))}
      </ul>
    )
  }
  return (
    <ul {...props} className={$.clcs([_className, 'inline-flex'])}>
      {items?.map(([key, { start, middle, end, status: color }], i) => (
        <li key={key}>
          {i !== 0 && (
            <hr
              className={$.clcs([
                $.clco({
                  'bg-success':
                    (!!status &&
                      i >= status.start &&
                      i <= (status?.end ?? items.length - 1) &&
                      status.value === 'success') ||
                    color === 'success',
                  'bg-info':
                    (!!status &&
                      i >= status.start &&
                      i <= (status?.end ?? items.length - 1) &&
                      status.value === 'info') ||
                    color === 'info',
                  'bg-error':
                    (!!status &&
                      i >= status.start &&
                      i <= (status?.end ?? items.length - 1) &&
                      status.value === 'error') ||
                    color === 'error',
                  'bg-warning':
                    (!!status &&
                      i >= status.start &&
                      i <= (status?.end ?? items.length - 1) &&
                      status.value === 'warning') ||
                    color === 'warning',
                }),
              ])}
            />
          )}
          {!!start && <TimeLine.Start {...start}> </TimeLine.Start>}
          {!!middle && <TimeLine.Middle {...middle}> </TimeLine.Middle>}
          {!!end && <TimeLine.End {...end}> </TimeLine.End>}
          {i !== items?.length - 1 && (
            <hr
              className={$.clcs([
                $.clco({
                  'bg-success':
                    !!status &&
                    i >= status.start &&
                    i < (status?.end ?? items.length - 1) &&
                    status.value === 'success',
                  'bg-info':
                    !!status &&
                    i >= status.start &&
                    i < (status?.end ?? items.length - 1) &&
                    status.value === 'info',
                  'bg-error':
                    !!status &&
                    i >= status.start &&
                    i < (status?.end ?? items.length - 1) &&
                    status.value === 'error',
                  'bg-warning':
                    !!status &&
                    i >= status.start &&
                    i < (status?.end ?? items.length - 1) &&
                    status.value === 'warning',
                }),
              ])}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

/* eslint-disable-next-line */
export interface TTimeStart {
  label?: string | JSX.Element
  box?: boolean
}

/* eslint-disable-next-line */
TimeLine.Start = function ({
  children,
  label,
  box = false,
  ...props
}: React.PropsWithChildren<TTimeEnd> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div
      {...props}
      className={$.clcs([
        'timeline-start',
        $.clco({
          'timeline-box': box,
        }),
        props?.className,
      ])}
    >
      {label ?? children}
    </div>
  )
}

/* eslint-disable-next-line */
export interface TTimeMiddle {
  label?: string | JSX.Element
}

/* eslint-disable-next-line */
TimeLine.Middle = function ({
  children,
  label,
  ...props
}: React.PropsWithChildren<TTimeEnd> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div {...props} className={$.clcs(['timeline-middle', props?.className])}>
      {label ?? children}
    </div>
  )
}

/* eslint-disable-next-line */
export interface TTimeEnd {
  label?: string | JSX.Element
  box?: boolean
}

/* eslint-disable-next-line */
TimeLine.End = function ({
  children,
  box = false,
  label,
  ...props
}: React.PropsWithChildren<TTimeEnd> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div
      {...props}
      className={$.clcs([
        'timeline-end',
        $.clco({
          'timeline-box': box,
        }),
        props?.className,
      ])}
    >
      {label ?? children}
    </div>
  )
}

export default TimeLine
