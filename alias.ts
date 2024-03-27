import { resolve } from 'node:path'

export const alias: Record<string, string> = {
  '@base': resolve(__dirname, './packages/app-base'),
  '@ui-library': resolve(__dirname, './packages/ui-library/src'),
}
