/* eslint-disable no-undef */
import {useEffect, useState, useCallback} from 'react'
import useDrivePicker from 'react-google-drive-picker'
import type {CallbackDoc, PickerConfiguration} from 'react-google-drive-picker/dist/typeDefs'
import type {AssetFromSource, AssetSourceComponentProps} from 'sanity'
import {documentToFileAsset} from '../helpers'

type GoogleDrivePickerProps = AssetSourceComponentProps &
  Pick<PickerConfiguration, 'clientId' | 'developerKey'>

export function GoogleDrivePicker(props: GoogleDrivePickerProps) {
  const {onSelect, onClose, clientId, developerKey} = props
  const [isOpen, setIsOpen] = useState(false)
  const [token, setToken] = useState<string | undefined>(undefined)
  const [openPicker, authResponse] = useDrivePicker()

  const handleClose = useCallback(() => {
    setIsOpen(false)
    onClose()
  }, [onClose, setIsOpen])

  const handleSelect = useCallback(
    (documents: CallbackDoc[]) => {
      setIsOpen(false)

      const assets = documents.map<AssetFromSource>(documentToFileAsset)

      onSelect(assets)
    },
    [setIsOpen, onSelect]
  )

  const open = useCallback(() => {
    setIsOpen(true)
    openPicker({
      clientId,
      developerKey,
      token,
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      setIncludeFolders: true,
      setSelectFolderEnabled: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        switch (data.action) {
          case google.picker.Action.CANCEL:
            handleClose()
            return

          case google.picker.Action.PICKED:
            if (Array.isArray(data.docs)) {
              handleSelect(data.docs)
            }
            return

          default:
            console.error('[Google Drive Plugin]: Unexpected action')
        }
      },
    })
  }, [token, handleClose, handleSelect])

  useEffect(() => {
    if (authResponse?.access_token) {
      setToken(authResponse.access_token)
    }
  })

  useEffect(() => {
    // eslint-disable-next-line no-eq-null
    if (window?.google?.picker == null || isOpen) {
      return
    }

    open()
  }, [window?.google?.picker, open])

  return null
}

// NOTE: Support lazy-loading via `React.lazy`
export {GoogleDrivePicker as default}
