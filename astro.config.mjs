import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import UnoCSS from 'unocss/astro'

// const modules = import.meta.glob('./preload.js')
// console.log('modules',modules)
// console.log('meta.glob.102', modules['./preload.js']())
// modules['./preload.js']().then(data=>{
//     console.log('ddddddddd',data.obj)
// })
// https://astro.build/config
export default defineConfig({
    integrations: [
        vue(),
        UnoCSS(),
    ],
    build: {
        assetsPrefix: './'
      }
});
