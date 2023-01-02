import {defineType, defineField, type ObjectDefinition} from 'sanity'

export const FILE = 'googleDrive.file' as const

export type GoogleDriveFileDefinition = Omit<ObjectDefinition, 'type'> & {
  type: typeof FILE
}

declare module 'sanity' {
  export interface IntrinsicDefinitions {
    'googleDrive.file': GoogleDriveFileDefinition
  }
}

export const file = defineType(
  {
    title: 'Google Drive File',
    name: FILE,
    type: 'object',
    fields: [
      defineField({
        name: 'asset',
        type: 'reference',
        to: [{type: 'googleDrive.fileAsset'}],
        readOnly: true,
      }),
    ],
  },
  {aliasFor: 'object', strict: false}
)
