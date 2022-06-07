import { BobParser, BrpParser, CobParser } from "./parser/index.js"
import { BobTransformer, BrpTransformer, CobTransformer } from "./transform/index.js"

const BobReader = bytes => BobTransformer(new BobParser(bytes))
const BrpReader = bytes => BrpTransformer(new BrpParser(bytes))
const CobReader = bytes => CobTransformer(new CobParser(bytes))

export {
  BobReader,
  BrpReader,
  CobReader
}