# This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

from pkg_resources import parse_version
import kaitaistruct
from kaitaistruct import KaitaiStruct, KaitaiStream, BytesIO
from enum import Enum


if parse_version(kaitaistruct.__version__) < parse_version('0.9'):
    raise Exception("Incompatible Kaitai Struct Python API: 0.9 or later is required, but you have %s" % (kaitaistruct.__version__))

class BombsquadBob(KaitaiStruct):

    class EMeshFormat(Enum):
        index_8 = 0
        index_16 = 1
    def __init__(self, _io, _parent=None, _root=None):
        self._io = _io
        self._parent = _parent
        self._root = _root if _root else self
        self._read()

    def _read(self):
        self.header = BombsquadBob.Header(self._io, self, self._root)
        self.vertex_count = BombsquadBob.VertexCount(self._io, self, self._root)
        self.face_count = BombsquadBob.FaceCount(self._io, self, self._root)
        self.vertex_object = BombsquadBob.VertexObject(self._io, self, self._root)

    class VertexCount(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.count = self._io.read_u4le()


    class VertexObject(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.pos = BombsquadBob.VertexPosition(self._io, self, self._root)
            self.uv = BombsquadBob.VertexUv(self._io, self, self._root)
            self.norm = BombsquadBob.VertexNormal(self._io, self, self._root)
            self.padding = self._io.read_bytes(2)
            if not self.padding == b"\x00\x00":
                raise kaitaistruct.ValidationNotEqualError(b"\x00\x00", self.padding, self._io, u"/types/vertex_object/seq/3")


    class VertexPosition(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.x = self._io.read_f4le()
            self.y = self._io.read_f4le()
            self.z = self._io.read_f4le()


    class VertexNormal(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.x = self._io.read_s2le()
            self.y = self._io.read_s2le()
            self.z = self._io.read_s2le()


    class Header(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.magic = self._io.read_bytes(4)
            if not self.magic == b"\x37\xB2\x00\x00":
                raise kaitaistruct.ValidationNotEqualError(b"\x37\xB2\x00\x00", self.magic, self._io, u"/types/header/seq/0")
            self.mesh_format = KaitaiStream.resolve_enum(BombsquadBob.EMeshFormat, self._io.read_u4le())


    class VertexUv(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.x = self._io.read_u2le()
            self.y = self._io.read_u2le()


    class FaceCount(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.count = self._io.read_u4le()



