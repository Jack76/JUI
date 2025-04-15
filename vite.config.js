import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/lib/index.js',
      name: 'MyComponentLibrary',
      fileName: (format) => `my-component-library.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': 'Emotion',
          '@emotion/styled': 'EmotionStyled'
        }
      }
    }
  }
})