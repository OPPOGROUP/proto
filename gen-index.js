"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:fs/promises");
const package_json_1 = __importDefault(require("./package.json"));
const path = __importStar(require("node:path"));
const outDir = './jslib';
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
Object.defineProperty(exports, "__esModule", { value: true });
/* node require star */`;
const requireModStarJS = ([mod, protoFiles]) => protoFiles.map(protoFile => `// file: ${protoFile}.proto
__exportStar(require("./${mod}/${protoFile}_pb"), exports);
__exportStar(require("./${mod}/${protoFile}_grpc_pb"), exports);`).join('\n');
const requireModStarTS = ([mod, protoFiles]) => protoFiles.map(protoFile => `// file: ${protoFile}.proto
export * from './${mod}/${protoFile}_pb';
export * from './${mod}/${protoFile}_grpc_pb';`).join('\n');
async function updateVersion() {
    const { version } = package_json_1.default;
    const verChunk = version.split('.');
    const verNum = verChunk.pop();
    if (verNum !== undefined && !Number.isNaN(+verNum)) {
        verChunk.push((+verNum + 1) + '');
        package_json_1.default.version = verChunk.join('.');
        await (0, promises_1.writeFile)('./package.json', JSON.stringify(package_json_1.default, null, 4));
    }
}
async function getProtoDir() {
    const dir = await (0, promises_1.opendir)('./proto');
    const ret = [];
    for await (const dirent of dir) {
        const tmp = []
        if (dirent.isFile() && dirent.name.endsWith('.proto')) {
            const nameChunk = dirent.name.split('.');
            nameChunk.pop();
            tmp.push(nameChunk.join('.'));
        }
        ret.push(['proto', tmp])
    }
    return ret;
}
async function start() {
    const targets = await getProtoDir();
    await (0, promises_1.writeFile)(path.join(outDir, 'index.js'), importHelper + '\n' + targets.map(requireModStarJS).join('\n'));
    await (0, promises_1.writeFile)(path.join(outDir, 'index.d.ts'), targets.map(requireModStarTS).join('\n'));
    await updateVersion();
}
start();
