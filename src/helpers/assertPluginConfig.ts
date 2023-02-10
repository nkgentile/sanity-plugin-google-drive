import {GoogleDrivePluginConfig} from '../types'

export function assertPluginConfig(
  config: Partial<GoogleDrivePluginConfig>
): asserts config is GoogleDrivePluginConfig {
  // eslint-disable-next-line no-eq-null
  if (config.clientId == null) {
    throw new Error(`
      Google Drive client ID is not defined.
    `)
  }

  // eslint-disable-next-line no-eq-null
  if (config.apiKey == null) {
    throw new Error(`
      Google Drive API key is not defined.
    `)
  }
}
