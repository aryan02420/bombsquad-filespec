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
    this.meshInfo = new MeshInfo(this._io, this, this._root);
    this.data = new MeshData(this._io, this, this._root);
  }

  var Vertex = BombsquadBob.Vertex = (function() {
    function Vertex(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Vertex.prototype._read = function() {
      this.pos = new Array(3);
      for (var i = 0; i < 3; i++) {
        this.pos[i] = this._io.readF4le();
      }
      this.uv = new Array(2);
      for (var i = 0; i < 2; i++) {
        this.uv[i] = this._io.readU2le();
      }
      this.norm = new Array(3);
      for (var i = 0; i < 3; i++) {
        this.norm[i] = this._io.readS2le();
      }
      this.padding = this._io.readBytes(2);
      if (!((KaitaiStream.byteArrayCompare(this.padding, [0, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([0, 0], this.padding, this._io, "/types/vertex/seq/3");
      }
    }

    return Vertex;
  })();

  var Face = BombsquadBob.Face = (function() {
    function Face(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Face.prototype._read = function() {
      this.indices = new Array(3);
      for (var i = 0; i < 3; i++) {
        switch (this._root.meshInfo.meshFormat) {
        case BombsquadBob.EMeshFormat.INDEX_8:
          this.indices[i] = this._io.readS1();
          break;
        case BombsquadBob.EMeshFormat.INDEX_16:
          this.indices[i] = this._io.readU2le();
          break;
        }
      }
    }

    return Face;
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
    }

    /**
     * BOB MAGIC 45623
     */

    return Header;
  })();

  var MeshData = BombsquadBob.MeshData = (function() {
    function MeshData(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    MeshData.prototype._read = function() {
      this.vertices = new Array(this._root.meshInfo.vertexCount);
      for (var i = 0; i < this._root.meshInfo.vertexCount; i++) {
        this.vertices[i] = new Vertex(this._io, this, this._root);
      }
      this.faces = new Array(this._root.meshInfo.faceCount);
      for (var i = 0; i < this._root.meshInfo.faceCount; i++) {
        this.faces[i] = new Face(this._io, this, this._root);
      }
    }

    return MeshData;
  })();

  var MeshInfo = BombsquadBob.MeshInfo = (function() {
    function MeshInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    MeshInfo.prototype._read = function() {
      this.meshFormat = this._io.readU4le();
      this.vertexCount = this._io.readU4le();
      this.faceCount = this._io.readU4le();
    }

    /**
     * MeshFormat
     * 0 => MESH_FORMAT_UV16_N8_INDEX8
     * 1 => MESH_FORMAT_UV16_N8_INDEX16
     */

    return MeshInfo;
  })();

  return BombsquadBob;
})();
return BombsquadBob;
}));
