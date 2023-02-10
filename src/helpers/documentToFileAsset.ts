import type {CallbackDoc} from 'react-google-drive-picker/dist/typeDefs'
import type {GoogleDriveFileAssetFromSource} from '../types'

export function documentToFileAsset(document: CallbackDoc): GoogleDriveFileAssetFromSource {
  return {
    kind: 'url',
    value: document,
  }
}
