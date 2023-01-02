import React from 'react'
import {Grid} from '@sanity/ui'
import {AssetPreviewProps} from './AssetPreviewProps'
import {GoogleDriveButton} from './GoogleDriveButton'

export function AssetPreview(props: AssetPreviewProps) {
  const {value, children} = props

  return (
    <Grid gap={1} style={{gridTemplateColumns: '1fr min-content'}}>
      {children}
      <GoogleDriveButton
        disabled={!value?.url}
        href={value?.url}
        title={GoogleDriveButton.defaultText}
      />
    </Grid>
  )
}
