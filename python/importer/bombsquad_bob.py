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
        self.mesh_info = BombsquadBob.MeshInfo(self._io, self, self._root)
        self.data = BombsquadBob.MeshData(self._io, self, self._root)

    class Vertex(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.pos = [None] * (3)
            for i in range(3):
                self.pos[i] = self._io.read_f4le()

            self.uv = [None] * (2)
            for i in range(2):
                self.uv[i] = self._io.read_u2le()

            self.norm = [None] * (3)
            for i in range(3):
                self.norm[i] = self._io.read_s2le()

            self.padding = self._io.read_bytes(2)
            if not self.padding == b"\x00\x00":
                raise kaitaistruct.ValidationNotEqualError(b"\x00\x00", self.padding, self._io, u"/types/vertex/seq/3")


    class Face(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.indices = [None] * (3)
            for i in range(3):
                _on = self._root.mesh_info.mesh_format
                if _on == BombsquadBob.EMeshFormat.index_8:
                    self.indices[i] = self._io.read_s1()
                elif _on == BombsquadBob.EMeshFormat.index_16:
                    self.indices[i] = self._io.read_u2le()



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


    class MeshData(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.vertices = [None] * (self._root.mesh_info.vertex_count)
            for i in range(self._root.mesh_info.vertex_count):
                self.vertices[i] = BombsquadBob.Vertex(self._io, self, self._root)

            self.faces = [None] * (self._root.mesh_info.face_count)
            for i in range(self._root.mesh_info.face_count):
                self.faces[i] = BombsquadBob.Face(self._io, self, self._root)



    class MeshInfo(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.mesh_format = KaitaiStream.resolve_enum(BombsquadBob.EMeshFormat, self._io.read_u4le())
            self.vertex_count = self._io.read_u4le()
            self.face_count = self._io.read_u4le()



