import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: [
      ['btn','text-center'],
    ],
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1,
        warn: true,
      }),
      // presetWebFonts({
      //   fonts: {
      //     sans: 'DM Sans',
      //     serif: 'DM Serif Display',
      //     mono: 'DM Mono',
      //   },
      // }),
    ]
  })
  