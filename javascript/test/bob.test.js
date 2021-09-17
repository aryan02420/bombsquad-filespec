const fs = require('fs')
const path = require('path')
const BombsquadBob = require('./../importer/BombsquadBob')
const KaitaiStream = require('kaitai-struct/KaitaiStream')


const fileContent = fs.readFileSync(path.join(__dirname, './../../models/cube.bob'))
const parsed = new BombsquadBob(new KaitaiStream(fileContent))
console.log('vertices')
parsed.data.vertices.forEach((vertex) => console.log(vertex.pos))
console.log('faces')
parsed.data.faces.forEach((face) => console.log(face.indices))
