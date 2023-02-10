import {type InputProps, isObjectInputProps} from 'sanity'
import type {GoogleDriveFileInputProps} from '../types'
import {FILE_ASSET} from '../schema'

export function isGoogleDriveFileInputProps(props: InputProps): props is GoogleDriveFileInputProps {
  return isObjectInputProps(props) && props.schemaType.type?.name === FILE_ASSET
}
