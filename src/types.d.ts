import type {ReactNode} from 'react'
import type {
  ObjectOptions,
  ObjectSchemaType,
  PreviewConfig,
  ObjectDefinition,
  ObjectInputProps,
  File,
  AssetFromSource,
} from 'sanity'
import type {PickerConfiguration} from 'react-google-drive-picker/dist/typeDefs'
import {FILE, FILE_ASSET} from './schema'

export type GoogleDriveFileDefinition = Omit<ObjectDefinition, 'type'> & {
  type: typeof FILE
}

export interface GoogleDriveFileAssetOptions extends ObjectOptions {
  layout?: 'embed' | null | undefined
}

export type GoogleDriveFileAssetDefinition = Omit<ObjectDefinition, 'type'> & {
  type: typeof FILE_ASSET
  options?: GoogleDriveFileAssetOptions
}

export interface GoogleDriveFileAssetSchemaType extends ObjectSchemaType {
  options?: GoogleDriveFileAssetOptions
  preview: Required<
    PreviewConfig<{
      name: string
      type: string
      iconUrl: string
    }>
  >
}

export interface GoogleDriveFileAsset {
  [index: string]: string
  embedUrl: string
  iconUrl: string
  itemId: string
  itemName: string
  mimeType: string
  type: string
  url: string
}

export type GoogleDriveFileAssetValue = Partial<GoogleDriveFileAsset>

export interface AssetPreviewProps {
  value?: GoogleDriveFileAssetValue | null
  children?: ReactNode
}

export type GoogleDriveFileInputProps = ObjectInputProps<
  GoogleDriveFileAssetValue,
  GoogleDriveFileAssetSchemaType
> &
  Pick<PickerConfiguration, 'clientId' | 'developerKey'>

declare module 'sanity' {
  export interface IntrinsicDefinitions {
    'googleDrive.file': GoogleDriveFileDefinition
    'googleDrive.fileAsset': GoogleDriveFileAssetDefinition
  }
}

export interface GoogleDrivePluginConfig {
  clientId: string
  apiKey: string
}

export interface FileAsset {
  mimeType: string
  url: string
  size: number
  assetId: string
  extension: string
}

export interface GoogleDriveFileAssetFromSource extends AssetFromSource {
  kind: 'url'
  value: File
}
