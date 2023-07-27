import fs from 'node:fs'

fs.mkdirSync('./dist/theme', { recursive: true })
fs.copyFileSync('./src/theme/windiTheme.ts', './dist/theme/windiTheme.ts')
fs.copyFileSync('./src/theme/windiTheme.ts', './dist/theme/windiTheme.js')
