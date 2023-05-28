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
      ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-50 '],
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
  