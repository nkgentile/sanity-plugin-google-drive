import type {PickerConfiguration} from 'react-google-drive-picker/dist/typeDefs'
import type {ObjectInputProps} from 'sanity'
import {GoogleDriveFileAssetSchemaType} from './fileAsset'
import {GoogleDriveFileAssetValue} from './GoogleDriveFileAsset'

export type GoogleDriveFileInputProps = ObjectInputProps<
  GoogleDriveFileAssetValue,
  GoogleDriveFileAssetSchemaType
> &
  Pick<PickerConfiguration, 'clientId' | 'developerKey'>
