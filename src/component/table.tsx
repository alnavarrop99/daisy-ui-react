import { $ } from '@/helper'
import { useMemo } from 'react'

/* eslint-disable-next-line */
export interface TTable<T> {
  cols: T
  rows: (Record<keyof T, string | JSX.Element> & {
    status?: 'info' | 'success' | 'warning' | 'error'
    hoverable?: boolean
  } & React.DetailedHTMLProps<
      React.TdHTMLAttributes<HTMLTableDataCellElement>,
      HTMLTableDataCellElement
    >)[]
  hoverable?: boolean
  zebra?: boolean
  foot?: boolean
  size?: 'xs' | 'md' | 'lg' | 'sm'
  pins?: 'cols' | 'rows' | 'both'
}

/* eslint-disable-next-line */
export function Table<T>({
  cols: _cols,
  rows,
  hoverable = false,
  zebra = false,
  foot = false,
  size = 'md',
  pins,
  ...props
}: TTable<T> &
  React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >) {
  const cols = useMemo(
    () =>
      Object.entries<string | JSX.Element>(
        _cols as Record<keyof T, string | JSX.Element>
      ),
    [_cols]
  )
  const last = useMemo(() => rows?.at(-1), [rows])
  if (!rows?.length || !cols?.length || cols?.every(([key]) => !key)) return
  return (
    <div className="overflow-x-auto">
      <table
        {...props}
        className={$.clcs([
          'table',
          $.clco({
            'table-zebra': !!zebra,
            'table-xs': size === 'xs',
            'table-md': size === 'md',
            'table-sm': size === 'sm',
            'table-lg': size === 'lg',
            'table-pin-rows': pins === 'rows',
            'table-pin-cols': pins === 'cols',
            'table-pin-rows table-pin-cols': pins === 'both',
          }),
          props?.className,
        ])}
      >
        <thead>
          <tr>{cols?.map(([key, value]) => <th key={key}>{value}</th>)}</tr>
        </thead>

        <tbody>
          {rows
            ?.slice(0, foot ? -1 : rows.length)
            ?.map(({ status, hoverable: hover, ...props }, i) => (
              <tr
                {...Object?.entries(props)?.filter(([key]) =>
                  Object.keys(cols).every((item) => item !== key)
                )}
                className={$.clcs([
                  $.clco({
                    'bg-info': status === 'info',
                    'bg-success': status === 'success',
                    'bg-error': status === 'error',
                    'bg-warning': status === 'warning',
                    hover: !!hover || !!hoverable,
                  }),
                  props.className,
                ])}
                key={cols?.[i]?.[0]}
              >
                {cols?.map(([key]) => (
                  <td key={key}>{rows?.[i]?.[key as keyof T]}</td>
                ))}
              </tr>
            ))}
        </tbody>
        {!!foot && !!last && (
          <tfoot>
            <tr
              {...Object?.entries(last)?.filter(([key]) =>
                Object.keys(cols).every((item) => item !== key)
              )}
            >
              {cols?.map(([key]) => (
                <th key={key}>{last?.[key as keyof T]}</th>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}

export default Table
