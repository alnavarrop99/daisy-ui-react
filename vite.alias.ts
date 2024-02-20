import { resolve } from 'path'

const root = resolve(__dirname, 'src')

export const alias: Record<string, string> = {
  '@component': resolve(root, 'component'),
  '@layout': resolve(root, 'layout'),
  '@pages': resolve(root, 'pages'),
  '@assets': resolve(root, 'assets'),
  '@gcss': resolve(root, resolve('styles'), 'gcss.module.css'),
  '@': resolve(root, 'helper.tsx'),
}

export default alias
