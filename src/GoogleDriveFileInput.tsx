/* eslint-disable no-undef */
import React, {useCallback, useMemo, useRef} from 'react'
import useDrivePicker from 'react-google-drive-picker'
import {Stack, Button, Grid, Card, Text} from '@sanity/ui'
import type {GoogleDriveFileInputProps} from './googleDriveFileInputProps'
import {PatchEvent, set, unset} from 'sanity'
import type {GoogleDriveFileAssetValue} from './GoogleDriveFileAsset'
import {AssetEmbed} from './AssetEmbed'
import {AssetPreview} from './AssetPreview'
import type {PickerCallback} from 'react-google-drive-picker/dist/typeDefs'

function EmptyPreview() {
  return (
    <Card padding={3} border style={{borderStyle: 'dashed'}} radius={2}>
      <Text align="center" muted size={1}>
        No asset selected
      </Text>
    </Card>
  )
}

export function GoogleDriveFileInput(props: GoogleDriveFileInputProps) {
  const {onChange, readOnly, value, clientId, developerKey, schemaType, renderPreview} = props
  const {options} = schemaType

  const token = useRef<string | undefined>(undefined)
  const [openPicker, authResponse] = useDrivePicker()

  if (authResponse) {
    token.current = authResponse.access_token
  }

  const handleRemove = useCallback(() => {
    onChange(PatchEvent.from([unset()]))
  }, [onChange])

  const handleAction = useCallback<(data: PickerCallback) => void>(
    (data) => {
      switch (data.action) {
        case google.picker.Action.PICKED: {
          const {docs} = data
          if (docs.length) {
            const [asset] = docs

            const newValue: GoogleDriveFileAssetValue = {
              embedUrl: asset[google.picker.Document.EMBEDDABLE_URL],
              iconUrl: asset[google.picker.Document.ICON_URL],
              itemId: asset[google.picker.Document.ID],
              itemName: asset[google.picker.Document.NAME],
              mimeType: asset[google.picker.Document.MIME_TYPE],
              type: asset[google.picker.Document.TYPE],
              url: asset[google.picker.Document.URL],
            }

            const patch = PatchEvent.from([set(newValue)])

            onChange(patch)
          }
          break
        }
        default:
      }
    },
    [onChange]
  )

  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = useCallback(() => {
    openPicker({
      clientId,
      developerKey,
      token: token.current, // pass oauth token in case you already have one
      multiselect: false,
      // customViews: customViewsArray, // custom view
      callbackFunction: handleAction,
    })
  }, [clientId, developerKey, handleAction, openPicker])

  const preview = useMemo(
    () => {
      if (!value) {
        return <EmptyPreview />
      }
      return renderPreview({schemaType, value})
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  )

  const Preview = useMemo(
    () => (options?.layout === 'embed' ? AssetEmbed : AssetPreview),
    [options?.layout]
  )

  return (
    <Stack space={2}>
      <Preview value={value}>{preview}</Preview>

      <Grid gap={1} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'}}>
        <Button
          disabled={readOnly}
          mode="ghost"
          title="Select an asset"
          tone="default"
          onClick={handleOpenPicker}
          text="Select…"
        />
        <Button
          disabled={readOnly || !value}
          tone="critical"
          mode="ghost"
          title="Remove asset"
          text="Remove"
          onClick={handleRemove}
        />
      </Grid>
    </Stack>
  )
}

// NOTE: Support lazy-loading via `React.lazy`
export {GoogleDriveFileInput as default}
