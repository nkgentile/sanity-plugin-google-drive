# sanity-plugin-google-drive

> This is a **Sanity Studio v3** plugin.

## Installation

```
npm install --save sanity-plugin-google-drive
```

## Usage
Add it as a plugin in sanity.config.ts (or .js):

```
 import {defineConfig} from 'sanity'
 import {googleDrive} from 'sanity-plugin-google-drive'

 export const defineConfig({
     //...
     plugins: [
         googleDrive({})
     ]
 })
```
## License

[MIT](LICENSE) © Noah Gentile

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.

### Release new version

Run ["CI & Release" workflow](https://github.com/nkgentile/sanity-plugin-google-drive/actions/workflows/main.yml).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.