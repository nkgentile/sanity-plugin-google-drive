import {defineType, defineField} from 'sanity'

export const FILE = 'googleDrive.file' as const

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
