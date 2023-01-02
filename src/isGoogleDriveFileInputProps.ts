import {type InputProps, isObjectInputProps} from 'sanity'
import {FILE_ASSET} from './fileAsset'
import type {GoogleDriveFileInputProps} from './googleDriveFileInputProps'

export function isGoogleDriveFileInputProps(props: InputProps): props is GoogleDriveFileInputProps {
  return isObjectInputProps(props) && props.schemaType.type?.name === FILE_ASSET
}
