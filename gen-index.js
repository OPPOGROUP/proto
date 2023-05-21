const fsp = require('node:fs/promises')
const path = require('node:path')

async function start() {
  const ret = []

  const dir = await fsp.opendir('.')
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      const modDir = await fsp.opendir(`./${dirent.name}`)
      for await (const modDirent of modDir) {
        if (modDirent.isFile() && modDirent.name.endsWith('.proto')) {
          ret.push(modDirent.name)
        }
      }
    }
  }

  const ts = ret
    .map(target => {
      const chunks = target.split('.')
      chunks.pop()
      return chunks.join('_')
    })
    .map(target => [
      `export * from './js/${target}_pb/${target}_pb'`,
      `export * from './js/${target}_pb/${target}_grpc_pb'`
    ].join('\n'))
    .join('\n')

  await fsp.writeFile('./index.ts', ts)
}

start()
