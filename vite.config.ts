/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-06-10 11:59:45
 * @LastEditTime: 2023-06-12 20:37:32
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'


const pathResolve =(dir: string)=> {
  
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '/@/',
        replacement: pathResolve("src")+'/',
      },
   
    ]
  },
  server: {
    host:'0.0.0.0'
  },
  plugins: [react()],
})
