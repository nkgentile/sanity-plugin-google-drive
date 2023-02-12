import {definePlugin} from 'sanity'
import type {GoogleDrivePluginConfig} from './types'
import {createAssetSource, createFormInput} from './components'
import {assertPluginConfig} from './helpers'
import {file, fileAsset} from './schema'

export {file, fileAsset}
export {createAssetSource, createFormInput}

/**
 * ## Usage in sanity.config.ts (or .js)
 *
 * ```
 * import {defineConfig} from 'sanity'
 * import {googleDrive} from 'sanity-plugin-google-drive'
 *
 * export const defineConfig({
 *     //...
 *     plugins: [
 *         googleDrive({
 *           apiKey: API_KEY,
 *           clientId: CLIENT_ID,
 *         })
 *     ]
 * })
 * ```
 */
export const googleDrive = definePlugin<Partial<GoogleDrivePluginConfig>>((config) => {
  assertPluginConfig(config)

  const FormInput = createFormInput(config)

  return {
    name: 'google-drive',
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

/**
 * ## Usage in sanity.config.ts (or .js)
 *
 * ```
 * import {defineConfig} from 'sanity'
 * import {googleDriveAssetSource} from 'sanity-plugin-google-drive'
 *
 * export const defineConfig({
 *     //...
 *     plugins: [
 *         googleDriveAssetSource({
 *           apiKey: API_KEY,
 *           clientId: CLIENT_ID,
 *         })
 *     ]
 * })
 * ```
 */
export const googleDriveAssetSource = definePlugin<Partial<GoogleDrivePluginConfig>>((config) => {
  assertPluginConfig(config)

  const assetSource = createAssetSource(config)

  return {
    name: 'google-drive-asset-source',
    form: {
      image: {
        assetSources: [assetSource],
      },
      file: {
        assetSources: [assetSource],
      },
    },
  }
})
