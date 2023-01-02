import {ReactNode} from 'react'
import {GoogleDriveFileAssetValue} from './GoogleDriveFileAsset'

export interface AssetPreviewProps {
  value?: GoogleDriveFileAssetValue | null
  children?: ReactNode
}
