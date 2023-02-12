import React, {lazy, memo, Suspense} from 'react'
import type {AssetSource, AssetSourceComponentProps} from 'sanity'
import {FaGoogleDrive} from 'react-icons/fa'
import type {GoogleDrivePluginConfig} from '../types'

const GoogleDriveSource = lazy(() => import('./GoogleDriveSource'))

export function createAssetSource(config: GoogleDrivePluginConfig): AssetSource {
  function Source(props: AssetSourceComponentProps) {
    return (
      // eslint-disable-next-line no-warning-comments
      // TODO: add fallback and error boundary components
      <Suspense>
        <GoogleDriveSource {...props} developerKey={config.apiKey} clientId={config.clientId} />
      </Suspense>
    )
  }

  return {
    name: 'google-drive',
    title: 'Google Drive',
    icon: FaGoogleDrive,
    component: memo(Source),
  }
}
