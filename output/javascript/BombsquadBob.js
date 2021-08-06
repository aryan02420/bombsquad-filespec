// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.BombsquadBob = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var BombsquadBob = (function() {
  BombsquadBob.EMeshFormat = Object.freeze({
    INDEX_8: 0,
    INDEX_16: 1,

    0: "INDEX_8",
    1: "INDEX_16",
  });

  function BombsquadBob(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  BombsquadBob.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.vertexCount = new VertexCount(this._io, this, this._root);
    this.faceCount = new FaceCount(this._io, this, this._root);
    this.vertexObject = new VertexObject(this._io, this, this._root);
  }

  var VertexCount = BombsquadBob.VertexCount = (function() {
    function VertexCount(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    VertexCount.prototype._read = function() {
      this.count = this._io.readU4le();
    }

    return VertexCount;
  })();

  var VertexObject = BombsquadBob.VertexObject = (function() {
    function VertexObject(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    VertexObject.prototype._read = function() {
      this.pos = new VertexPosition(this._io, this, this._root);
      this.uv = new VertexUv(this._io, this, this._root);
      this.norm = new VertexNormal(this._io, this, this._root);
      this.padding = this._io.readBytes(2);
      if (!((KaitaiStream.byteArrayCompare(this.padding, [0, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([0, 0], this.padding, this._io, "/types/vertex_object/seq/3");
      }
    }

    return VertexObject;
  })();

  var VertexPosition = BombsquadBob.VertexPosition = (function() {
    function VertexPosition(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    VertexPosition.prototype._read = function() {
      this.x = this._io.readF4le();
      this.y = this._io.readF4le();
      this.z = this._io.readF4le();
    }

    return VertexPosition;
  })();

  var VertexNormal = BombsquadBob.VertexNormal = (function() {
    function VertexNormal(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    VertexNormal.prototype._read = function() {
      this.x = this._io.readS2le();
      this.y = this._io.readS2le();
      this.z = this._io.readS2le();
    }

    return VertexNormal;
  })();

  var Header = BombsquadBob.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [55, 178, 0, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([55, 178, 0, 0], this.magic, this._io, "/types/header/seq/0");
      }
      this.meshFormat = this._io.readU4le();
    }

    /**
     * BOB MAGIC 45623
     */

    /**
     * MeshFormat
     * 0 => MESH_FORMAT_UV16_N8_INDEX8
     * 1 => MESH_FORMAT_UV16_N8_INDEX16
     */

    return Header;
  })();

  var VertexUv = BombsquadBob.VertexUv = (function() {
    function VertexUv(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    VertexUv.prototype._read = function() {
      this.x = this._io.readU2le();
      this.y = this._io.readU2le();
    }

    return VertexUv;
  })();

  var FaceCount = BombsquadBob.FaceCount = (function() {
    function FaceCount(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    FaceCount.prototype._read = function() {
      this.count = this._io.readU4le();
    }

    return FaceCount;
  })();

  return BombsquadBob;
})();
return BombsquadBob;
}));
