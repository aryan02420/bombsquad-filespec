// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.BombsquadCob = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var BombsquadCob = (function() {
  function BombsquadCob(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  BombsquadCob.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.meshInfo = new MeshInfo(this._io, this, this._root);
    this.meshData = new MeshData(this._io, this, this._root);
  }

  var Vertex = BombsquadCob.Vertex = (function() {
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
    }

    return Vertex;
  })();

  var Normal = BombsquadCob.Normal = (function() {
    function Normal(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Normal.prototype._read = function() {
      this.dir = new Array(3);
      for (var i = 0; i < 3; i++) {
        this.dir[i] = this._io.readF4le();
      }
    }

    return Normal;
  })();

  var Face = BombsquadCob.Face = (function() {
    function Face(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Face.prototype._read = function() {
      this.indices = new Array(3);
      for (var i = 0; i < 3; i++) {
        this.indices[i] = this._io.readU4le();
      }
    }

    return Face;
  })();

  var Header = BombsquadCob.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [154, 52, 0, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([154, 52, 0, 0], this.magic, this._io, "/types/header/seq/0");
      }
    }

    /**
     * COB MAGIC 13466
     */

    return Header;
  })();

  var MeshData = BombsquadCob.MeshData = (function() {
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
      this.normals = new Array(this._root.meshInfo.faceCount);
      for (var i = 0; i < this._root.meshInfo.faceCount; i++) {
        this.normals[i] = new Normal(this._io, this, this._root);
      }
    }

    return MeshData;
  })();

  var MeshInfo = BombsquadCob.MeshInfo = (function() {
    function MeshInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    MeshInfo.prototype._read = function() {
      this.vertexCount = this._io.readU4le();
      this.faceCount = this._io.readU4le();
    }

    return MeshInfo;
  })();

  return BombsquadCob;
})();
return BombsquadCob;
}));
