meta:
  id: bombsquad_cob
  application: BombSquad
  file-extension: cob
  endian: le
seq:
  - id: header
    type: header
  - id: mesh_info
    type: mesh_info
  - id: mesh_data
    type: mesh_data

types:
  header:
    seq:
      - id: magic
        contents: [0x9a, 0x34, 0x00, 0x00]
        doc: COB MAGIC 13466

  mesh_info:
    seq:
      - id: vertex_count
        type: u4
      - id: face_count
        type: u4

  mesh_data:
    seq:
      - id: vertices
        type: vertex
        repeat: expr
        repeat-expr: _root.mesh_info.vertex_count
      - id: faces
        type: face
        repeat: expr
        repeat-expr: _root.mesh_info.face_count
      - id: normals
        type: normal
        repeat: expr
        repeat-expr: _root.mesh_info.face_count

  vertex:
    seq:
      - id: pos
        type: f4
        repeat: expr
        repeat-expr: 3

  face:
    seq:
      - id: indices
        type: u4
        repeat: expr
        repeat-expr: 3

  normal:
    seq:
      - id: dir
        type: f4
        repeat: expr
        repeat-expr: 3

