import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { URL } from 'node:url'
import { CobReader } from './../src/index.js'
import KaitaiStream from 'kaitai-struct/KaitaiStream.js'

const __dirname = new URL('.', import.meta.url).pathname

const fileContent = readFileSync(join(__dirname, './../../models/cube.cob'))

const cob = CobReader(new KaitaiStream(fileContent))

console.log(cob)
