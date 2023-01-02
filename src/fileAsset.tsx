import React from 'react'
import {
  defineField,
  defineType,
  type ObjectOptions,
  type ObjectSchemaType,
  type ObjectDefinition,
  PreviewConfig,
} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {GoogleDriveIcon} from './GoogleDriveIcon'

export const FILE_ASSET = 'googleDrive.fileAsset' as const

export interface GoogleDriveFileAssetOptions extends ObjectOptions {
  layout?: 'embed' | null | undefined
}

export type GoogleDriveFileAssetDefinition = Omit<ObjectDefinition, 'type'> & {
  type: typeof FILE_ASSET
  options?: GoogleDriveFileAssetOptions
}

declare module 'sanity' {
  export interface IntrinsicDefinitions {
    'googleDrive.fileAsset': GoogleDriveFileAssetDefinition
  }
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

// eslint-disable-next-line no-warning-comments
// TODO: add validation
export const fileAsset = defineType(
  {
    type: 'document',
    name: FILE_ASSET,
    title: 'File Asset',
    description: 'A Google Drive file asset',
    fields: [
      defineField({
        title: 'Embed URL',
        description: 'A URL for an embeddable version of the item',
        name: 'embedUrl',
        type: 'url',
        readOnly: true,
      }),
      defineField({
        title: 'Icon URL',
        description: 'A URL for a publicly accessible version for an icon, if available.',
        name: 'iconUrl',
        type: 'url',
        readOnly: true,
      }),
      defineField({
        title: 'Item ID',
        name: 'itemId',
        type: 'string',
        description: 'ID of the selected item.',
        readOnly: true,
      }),
      defineField({
        title: 'Item Name',
        description: 'Name of the selected item.',
        name: 'itemName',
        type: 'string',
        readOnly: true,
      }),
      defineField({
        name: 'mimeType',
        type: 'string',
        title: 'MIME Type',
        description: 'The MIME type of the selected item (not valid for maps).',
        readOnly: true,
      }),
      defineField({
        name: 'type',
        type: 'string',
        title: 'Type',
        description: 'The Type of the selected item.',
        options: {list: ['photo', 'file', 'document', 'video']},
        readOnly: true,
      }),
      defineField({
        title: 'URL',
        description: 'A URL to this item.',
        name: 'url',
        type: 'url',
        readOnly: true,
      }),
    ],
    preview: {
      select: {
        name: 'itemName',
        type: 'type',
        iconUrl: 'iconUrl',
        description: 'mimeType',
      },
      prepare({name, type, iconUrl, description}) {
        const media = iconUrl ? <GoogleDriveIcon src={iconUrl} /> : DocumentIcon

        return {
          title: name,
          subtitle: type,
          media,
          description,
          imageUrl: iconUrl,
        }
      },
    },
  },
  {aliasFor: 'object'}
)
