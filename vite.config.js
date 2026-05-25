import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    // GitHub Pages project sites are served from /<repository-name>/.
    // If the repository is renamed, update this value to match it.
    base: '/meu-portifolio/',
    plugins: [vue()],
})
