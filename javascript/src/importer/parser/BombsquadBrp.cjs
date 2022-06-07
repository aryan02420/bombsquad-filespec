// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.BombsquadBrp = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var BombsquadBrp = (function() {
  function BombsquadBrp(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  BombsquadBrp.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
  }

  var Header = BombsquadBrp.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [37, 71, 1, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([37, 71, 1, 0], this.magic, this._io, "/types/header/seq/0");
      }
    }

    /**
     * BRP MAGIC 83749
     */

    return Header;
  })();

  return BombsquadBrp;
})();
return BombsquadBrp;
}));
