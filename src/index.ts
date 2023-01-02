import {definePlugin} from 'sanity'

interface GoogleDriveConfig {
  /* nothing here yet */
}

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
 *         googleDrive()
 *     ]
 * })
 * ```
 */
export const googleDrive = definePlugin<GoogleDriveConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-google-drive')
  return {
    name: 'sanity-plugin-google-drive',
  }
})
