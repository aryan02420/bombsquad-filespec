import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { URL } from 'node:url'
import { BobReader } from './../src/index.js'
import KaitaiStream from 'kaitai-struct/KaitaiStream.js'

const __dirname = new URL('.', import.meta.url).pathname

const fileContent = readFileSync(join(__dirname, './../../models/cube.bob'))

const bob = BobReader(new KaitaiStream(fileContent))

console.log(bob)