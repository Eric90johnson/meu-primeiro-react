import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/meu-primeiro-react/", // <--- ADICIONE ESTA LINHA (com o nome exato do seu repo)
})
