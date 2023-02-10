import React, {lazy, memo, Suspense} from 'react'
import type {InputProps} from 'sanity'
import type {GoogleDrivePluginConfig} from '../types'
import {isGoogleDriveFileInputProps} from '../helpers'

const GoogleDriveFileInput = lazy(() => import('./GoogleDriveFileInput'))

export function createFormInput(config: GoogleDrivePluginConfig) {
  function FormInput(props: InputProps) {
    if (isGoogleDriveFileInputProps(props)) {
      return (
        // eslint-disable-next-line no-warning-comments
        // TODO: add fallback and error boundary components
        <Suspense>
          <GoogleDriveFileInput
            {...props}
            developerKey={config.apiKey}
            clientId={config.clientId}
          />
        </Suspense>
      )
    }
    return props.renderDefault(props)
  }

  return memo(FormInput)
}
