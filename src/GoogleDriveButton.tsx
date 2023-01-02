import React, {ComponentProps} from 'react'
import {Button} from '@sanity/ui'
import {FaGoogleDrive} from 'react-icons/fa'

type GoogleDriveButtonProps = ComponentProps<typeof Button>

export function GoogleDriveButton(props: GoogleDriveButtonProps) {
  return (
    <Button
      as="a"
      rel="external noopener"
      target="_blank"
      color="default"
      icon={FaGoogleDrive}
      mode="bleed"
      {...props}
    />
  )
}

GoogleDriveButton.defaultText = 'Open in Drive'
