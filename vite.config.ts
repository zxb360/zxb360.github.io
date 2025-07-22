import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(),
    // {
    //   name: 'adjust-paths',
    //   enforce: 'post',
    //   apply: 'build',
    //   transformIndexHtml(html) {
    //     return html.replace(/src="\//g, 'src="')
    //                .replace(/href="\//g, 'href="')
    //   }
    // }
  ],
})
