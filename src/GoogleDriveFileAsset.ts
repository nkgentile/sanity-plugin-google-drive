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
