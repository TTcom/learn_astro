import { defineConfig } from 'astro/config'
import Unocss from 'unocss/astro'
import nodeAdapter from '@astrojs/node'

// https://astro.build/config
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  base: '/btmario',
  adapter: nodeAdapter({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
  },
  integrations: [vue({
    appEntrypoint: '/src/pages/_app',
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('my-'),
      },
    },
  }), Unocss()],
})
