import { $ } from '@/helper'
import { useMemo } from 'react'

/* eslint-disable-next-line */
export interface TBreadcrumbs {
  items?: Record<
    string,
    | string
    | JSX.Element
    | (Record<'label', string> &
        React.DetailedHTMLProps<
          React.LiHTMLAttributes<HTMLLIElement>,
          HTMLLIElement
        >)
  >
  size?: 'lg' | 'sm' | 'xs' | 'md'
}

/* eslint-disable-next-line */
export function Breadcrumbs({
  children,
  size = 'sm',
  items: _items,
  ...props
}: React.PropsWithChildren<TBreadcrumbs> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >) {
  const _classname = useMemo(
    () =>
      $.clcs([
        'breadcrumbs inline-block',
        $.clco({
          'text-lg': size === 'lg',
          'text-sm': size === 'sm',
          'text-xs': size === 'xs',
          'text-md': size === 'md',
        }),
      ]),
    [size]
  )
  const items = useMemo(() => Object?.entries(_items ?? {}), [_items])

  if (!children && items && !items?.length) return
  if (!!items && !!items?.length) {
    return (
      <div className={_classname}>
        <ul className={$.clcs([props?.className])}>
          {items?.map(([key, children]) => {
            if ($.isObj(children) && !$.isJSX(children)) {
              const { label, ...props } = children
              return (
                <Breadcrumbs.Items {...props} key={key}>
                  {' '}
                  {label}{' '}
                </Breadcrumbs.Items>
              )
            }
            return <Breadcrumbs.Items key={key}> {children} </Breadcrumbs.Items>
          })}
        </ul>
      </div>
    )
  }
  return (
    <div className={_classname}>
      <ul className={$.clcs([props?.className])}>{children}</ul>
    </div>
  )
}

/* eslint-disable-next-line */
export interface TBreadcrumbsItems {}

/* eslint-disable-next-line */
Breadcrumbs.Items = function ({
  children,
  ...props
}: React.PropsWithChildren<TBreadcrumbsItems> &
  React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >) {
  return <li {...props}>{children}</li>
}

/* eslint-disable-next-line */
Breadcrumbs.Group = Breadcrumbs

export default Breadcrumbs
