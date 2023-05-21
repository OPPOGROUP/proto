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
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("node:path"));
const promises_1 = require("node:fs/promises");
const modDir = __dirname;
const getBinPath = (bin) => path.resolve('./node_modules/.bin', bin);
const asArray = (data) => Array.isArray(data) ? data : [data];
const filterDir = async (dirPath, filter) => {
    const dir = await (0, promises_1.opendir)(dirPath);
    const ret = [];
    for await (const dirent of dir) {
        if (await filter(dirent))
            ret.push(dirent.name);
    }
    return ret;
};
function cmdBuilder(cmd) {
    const ret = [cmd];
    const opt = (key, value) => {
        ret.push(`--${key}="${value}"`);
    };
    const optPlugin = (pluName, pluPath) => {
        opt('plugin', `${pluName}=${pluPath}`);
    };
    const param = (params) => {
        for (const v of asArray(params))
            ret.push(v);
    };
    const build = () => ret.join(' ');
    return { opt, optPlugin, param, build };
}
const hasProtoFile = async (dirent) => {
    if (!dirent.isDirectory())
        return false;
    const dir = await (0, promises_1.opendir)(path.join(modDir, dirent.name));
    let count = 0;
    for await (const dirent of dir) {
        if (dirent.isFile() && dirent.name.endsWith('.proto')) {
            count += 1;
        }
    }
    return count !== 0;
};
const createCmd = (modName, files, outPath) => {
    const { opt, optPlugin, build, param } = cmdBuilder('protoc');
    opt('proto_path', path.join(modDir, modName));
    optPlugin('protoc-gen-ts', getBinPath('protoc-gen-ts'));
    optPlugin('protoc-gen-grpc', getBinPath('grpc_tools_node_protoc_plugin'));
    optPlugin('protoc-gen-js', getBinPath('protoc-gen-js'));
    opt('js_out', `import_style=commonjs,binary:${outPath}`);
    opt('ts_out', `service=grpc-node,mode=grpc-js:${outPath}`);
    opt('grpc_out', `grpc_js:${outPath}`);
    param(files);
    return build();
};
async function main() {
    const targets = await filterDir(modDir, hasProtoFile);
    for (const target of targets) {
        const outPath = path.resolve('./src/proto', target);
        const mkdirResult = await (0, promises_1.mkdir)(outPath, { recursive: true }).catch(() => null);
        if (mkdirResult === null)
            continue;
        const dir = await (0, promises_1.opendir)(path.join(modDir, target));
        const protoFiles = [];
        for await (const dirent of dir) {
            if (dirent.isFile() && dirent.name.endsWith('.proto')) {
                protoFiles.push(dirent.name);
            }
        }
        console.log(createCmd(target, protoFiles, outPath));
    }
}
main().catch(() => {
    console.log(`echo "error"`);
});
