import {definePlugin} from 'sanity'
import {assertPluginConfig} from './assertPluginConfig'
import {file} from './file'
import {fileAsset} from './fileAsset'
import {createFormInput} from './FormInput'
import type {GoogleDrivePluginConfig} from './googleDrivePluginConfig'

// eslint-disable-next-line no-warning-comments
// TODO: split up plugin into asset source and schema @see `sanity-plugin-cloudinary`

/**
 * ## Usage in sanity.config.ts (or .js)
 *
 * ```
 * import {defineConfig} from 'sanity'
 * import {googleDrive} from 'sanity-plugin-google-drive-file'
 *
 * export const defineConfig({
 *     /...
 *     plugins: [
 *         googleDrive()
 *     ]
 * })
 * ```
 */
export const googleDrive = definePlugin<Partial<GoogleDrivePluginConfig>>((config) => {
  assertPluginConfig(config)

  const FormInput = createFormInput(config)

  return {
    name: 'sanity-plugin-google-drive-file',
    schema: {
      types: [file, fileAsset],
    },
    form: {
      components: {
        input: FormInput,
      },
    },
  }
})

export interface FileAsset {
  mimeType: string
  url: string
  size: number
  assetId: string
  extension: string
}
