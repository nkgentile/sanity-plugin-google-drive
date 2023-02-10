import {definePlugin} from 'sanity'
import type {GoogleDrivePluginConfig} from './types'
import {createFormInput} from './components'
import {assertPluginConfig} from './helpers'
import {file, fileAsset} from './schema'

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
