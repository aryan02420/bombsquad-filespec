import { BobParser } from "./parser/index.js"
import { BobTransformer } from "./transform/index.js"

const BobReader = bytes => BobTransformer(new BobParser(bytes))

export {
  BobReader
}