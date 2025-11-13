import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'

import { wrapVinxiConfigWithSentry } from '@sentry/tanstackstart-react'

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    nitroV2Plugin({
      compatibilityDate: '2025-11-06',
      preset: 'node-server',
      minify: true,
      timing: false,
    }),
    tanstackStart(),
    viteReact(),
  ],
})

export default wrapVinxiConfigWithSentry(config, {
  org: process.env.VITE_SENTRY_ORG,
  project: process.env.VITE_SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
})
