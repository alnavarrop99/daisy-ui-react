import { $ } from '@/helper'

/* eslint-disable-next-line */
export interface TAvatar {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  mask?: 'squircle' | 'hexagon' | 'circle' | 'rounded'
  ring?: boolean
  online?: boolean
  offline?: boolean
}

/* eslint-disable-next-line */
export function Avatar({
  children,
  size = 'lg',
  mask = 'rounded',
  ring = false,
  online = false,
  offline = false,
  src,
  ...props
}: TAvatar &
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >) {
  if (!src && !children) {
    return
  }
  return (
    <div
      className={$.clcs([
        'avatar',
        $.clco({
          online: online,
          offline: offline,
        }),
      ])}
    >
      <div
        className={$.clcs([
          'mask rounded',
          $.clco({
            'w-8': size === 'xs',
            'w-16': size === 'sm',
            'w-20': size === 'md',
            'w-24': size === 'lg',
            'mask-squircle': mask === 'squircle',
            'mask-hexagon': mask === 'hexagon',
            'rounded-full': mask === 'circle',
            'rounded-lg': mask === 'rounded',
            placeholder: !!children && !src,
            'ring ring-offset-2': ring,
          }),
          props?.className ?? '',
        ])}
      >
        {children && !src ? (
          <span
            {...props}
            className="grid h-full place-content-center place-items-center text-center align-middle"
          >
            {children}
          </span>
        ) : (
          <img {...props} src={src} alt="avatar" className="" />
        )}
      </div>
    </div>
  )
}

/* eslint-disable-next-line */
export interface TGroupAvatar {
  distance?: 'xs' | 'sm' | 'md' | 'lg'
}

/* eslint-disable-next-line */
Avatar.Group = function ({
  children,
  distance = 'md',
  ...props
}: React.PropsWithChildren<TGroupAvatar> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div
      {...props}
      className={$.clcs([
        'avatar-group inline-block rtl:space-x-reverse',
        $.clco({
          '-space-x-8': distance === 'lg',
          '-space-x-12': distance === 'md',
          '-space-x-16': distance === 'sm',
          '-space-x-24': distance === 'xs',
        }),
        props.className ?? '',
      ])}
    >
      {children}
    </div>
  )
}

/* eslint-disable-next-line */
Avatar.Item = Avatar

export default Avatar
