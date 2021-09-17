# This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

from pkg_resources import parse_version
import kaitaistruct
from kaitaistruct import KaitaiStruct, KaitaiStream, BytesIO


if parse_version(kaitaistruct.__version__) < parse_version('0.9'):
    raise Exception("Incompatible Kaitai Struct Python API: 0.9 or later is required, but you have %s" % (kaitaistruct.__version__))

class BombsquadCob(KaitaiStruct):
    def __init__(self, _io, _parent=None, _root=None):
        self._io = _io
        self._parent = _parent
        self._root = _root if _root else self
        self._read()

    def _read(self):
        self.header = BombsquadCob.Header(self._io, self, self._root)
        self.mesh_info = BombsquadCob.MeshInfo(self._io, self, self._root)
        self.data = BombsquadCob.MeshData(self._io, self, self._root)

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



    class Normal(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.dir = [None] * (3)
            for i in range(3):
                self.dir[i] = self._io.read_f4le()



    class Face(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.indices = [None] * (3)
            for i in range(3):
                self.indices[i] = self._io.read_u4le()



    class Header(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.magic = self._io.read_bytes(4)
            if not self.magic == b"\x9A\x34\x00\x00":
                raise kaitaistruct.ValidationNotEqualError(b"\x9A\x34\x00\x00", self.magic, self._io, u"/types/header/seq/0")


    class MeshData(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.vertices = [None] * (self._root.mesh_info.vertex_count)
            for i in range(self._root.mesh_info.vertex_count):
                self.vertices[i] = BombsquadCob.Vertex(self._io, self, self._root)

            self.faces = [None] * (self._root.mesh_info.face_count)
            for i in range(self._root.mesh_info.face_count):
                self.faces[i] = BombsquadCob.Face(self._io, self, self._root)

            self.normals = [None] * (self._root.mesh_info.face_count)
            for i in range(self._root.mesh_info.face_count):
                self.normals[i] = BombsquadCob.Normal(self._io, self, self._root)



    class MeshInfo(KaitaiStruct):
        def __init__(self, _io, _parent=None, _root=None):
            self._io = _io
            self._parent = _parent
            self._root = _root if _root else self
            self._read()

        def _read(self):
            self.vertex_count = self._io.read_u4le()
            self.face_count = self._io.read_u4le()



