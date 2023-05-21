const fsp = require('node:fs/promises')
const path = require('node:path')

const importHelper = `"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });`

const reqStart = (req) => `__exportStar(require("./js/${req}_pb/${req}_pb"), exports);
__exportStar(require("./js/${req}_pb/${req}_grpc_pb"), exports);`
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

  await fsp.writeFile('./index.d.ts', ts.map(target => [
    `export * from './js/${target}_pb/${target}_pb'`,
    `export * from './js/${target}_pb/${target}_grpc_pb'`
  ].join('\n')).join('\n'))

  await fsp.writeFile('./index.js', [importHelper, ts.map(reqStart).join('\n')].join('\n'))
}

start()
