import React, {type ComponentPropsWithoutRef} from 'react'

type GoogleDriveIconProps = ComponentPropsWithoutRef<'svg'> & {src: string}

export function GoogleDriveIcon(props: GoogleDriveIconProps) {
  const width = '1rem'
  const {src, ...rest} = props

  return (
    <svg
      data-sanity-icon
      width={width}
      height={width}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <image href={src} width="100%" height="100%" />
    </svg>
  )
}
